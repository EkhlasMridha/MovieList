import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(data: any) {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return await this.userRepository.findOne(
            {
                where: condition
            }
        );
    }
}
