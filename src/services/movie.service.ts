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

    async create(payload: any) {
        return await this.movieRepository.save(payload);
    }

    async findOne(condition: any) {
        return await this.movieRepository.findOne({
            where: condition
        })
    }

    async findPaginated(query: PaginationQuery): Promise<Pagination<Movies>> {
        const take = query.pageSize || 0;
        let pageNumber = (query.pageNumber <= 0) ? 1 : query.pageNumber;
        let skip = ((pageNumber - 1) * take);

        const searchName = query.search || "";
        const sortOrder = query.sort || "ASC";

        const [result, total] = await this.movieRepository.findAndCount(
            {
                where: { name: Like("%" + searchName + "%") }, order: { name: sortOrder },
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
