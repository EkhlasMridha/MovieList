import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQuery } from 'src/Dtos/pagination-query.model';
import { Pagination } from 'src/Dtos/pagination.model';
import { Movies } from 'src/Entities/Movies';
import { Like, Repository } from 'typeorm';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movies)
        private movieRepository: Repository<Movies>
    ) { }

    async create(payload: Movies) {
        return await this.movieRepository.save(payload);
    }

    async findOne(condition: any, userId: number) {
        return await this.movieRepository.findOne({
            where: {
                ...condition,
                createdBy: userId
            }
        })
    }

    async deleteById(id: any, userId: number) {
        return await this.movieRepository.delete({ id: id, createdBy: userId })
    }

    async findPaginated(pageQuery: PaginationQuery, userId: number): Promise<Pagination<Movies>> {
        const take = pageQuery.pageSize || 0;
        let pageNumber = (pageQuery.pageNumber <= 0) ? 1 : pageQuery.pageNumber;
        let skip = ((pageNumber - 1) * take);

        const searchName = pageQuery.search || "";

        let [property, value] = pageQuery.sortString?.split("~") ?? ["", ""];

        let allowedProperties = ["name", "releaseDate"];

        let buildSortParam = {};
        if (allowedProperties.includes(property.trim()) &&
            ["ASC", "DESC"].includes(value?.toUpperCase().trim())) {
            buildSortParam[property] = value.toUpperCase();
        }
        if (Object.keys(buildSortParam).length === 0) {
            buildSortParam["name"] = "ASC";
        }

        const [result, total] = await this.movieRepository.findAndCount(
            {
                where: { name: Like("%" + searchName + "%"), createdBy: userId },
                order: { ...buildSortParam },
                take: take,
                skip: skip
            }
        );

        let data: Pagination<Movies> = {
            data: result,
            total: total,
            pageNumber: Number(pageNumber)
        }

        return data;
    }
}
