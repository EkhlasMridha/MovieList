import { Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }

    async getToken(user: any) {
        let token = this.jwtService.signAsync({ id: user.id });
        return token;
    }
}
