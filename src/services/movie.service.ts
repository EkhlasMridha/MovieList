import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from 'src/Entities/Movies';
import { Repository } from 'typeorm';

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
}
