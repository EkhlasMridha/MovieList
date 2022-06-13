import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from 'src/Entities/Movies';
import { User } from 'src/Entities/Users';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Movies])],
    providers: [UserService, MovieService],
    exports: [TypeOrmModule]
})
export class ServiceModule { }
