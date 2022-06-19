import { Body, Controller, Delete, Get, Param, Post, Query, Request } from '@nestjs/common';
import { CreateMovie } from 'src/Dtos/movies/create-movie';
import { DynamicPaginationQuery, PaginationQuery } from 'src/Dtos/pagination-query.model';
import { MovieService } from 'src/services/movie.service';

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) {

    }

    @Post()
    async createMovie(@Body() createMovieDto: CreateMovie, @Request() req) {
        let result = await this.movieService.create({
            id: createMovieDto.id,
            name: createMovieDto.name,
            releaseDate: createMovieDto.releaseDate,
            createdBy: req.user.userId
        })
        let dto: CreateMovie = {
            id: result.id,
            name: result.name,
            releaseDate: result.releaseDate
        }
        return dto;
    }

    @Get("byfilter")
    async getFilteredPaginatedMovies(@Query() query: PaginationQuery, @Request() req) {
        let result = await this.movieService.findPaginated(query, req.user.userId);
        return result;
    }

    @Get(":id")
    async getMovieById(@Param("id") id: any, @Request() req) {
        let result = await this.movieService.findOne({ id: id }, req.user.userId);
        return result;
    }

    @Delete(":id")
    async deleteMovieById(@Param("id") id: any, @Request() req) {
        let result = await this.movieService.deleteById(id, req.user.userId);
        return result;
    }
}
