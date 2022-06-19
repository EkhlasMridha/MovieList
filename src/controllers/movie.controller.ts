import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMovie } from 'src/Dtos/movies/create-movie';
import { PaginationQuery } from 'src/Dtos/pagination-query.model';
import { MovieService } from 'src/services/movie.service';

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) {

    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovie) {
        return this.movieService.create({
            id: createMovieDto.id,
            name: createMovieDto.name,
            releaseDate: createMovieDto.releaseDate
        })
    }

    @Get("byfilter")
    async getFilteredPaginatedMovies(@Query() query: PaginationQuery) {
        let result = await this.movieService.findPaginated(query);
        return result;
    }

    @Get(":id")
    async getMovieById(@Param("id") id: any) {
        let result = await this.movieService.findOne({ id: id });
        return result;
    }

    @Delete(":id")
    async deleteMovieById(@Param("id") id: any) {
        let result = await this.movieService.deleteById(id);
        return result;
    }
}
