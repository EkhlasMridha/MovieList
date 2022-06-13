import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovie } from 'src/Dtos/movies/create-movie';
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
}
