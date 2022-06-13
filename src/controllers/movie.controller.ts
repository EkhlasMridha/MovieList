import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
            name: createMovieDto.name,
            releaseDate: createMovieDto.releaseDate
        })
    }

    @Get("byfilter")
    async getFilteredPaginatedMovies(@Query() query: PaginationQuery) {
        let result = await this.movieService.findPaginated(query);
        return result;
    }
}
