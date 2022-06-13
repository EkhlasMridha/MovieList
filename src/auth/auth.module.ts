import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({
            secret: "adasdasdasdasd",
            signOptions: { expiresIn: "1d" }
        }),
        PassportModule
    ],
    providers: [JwtStrategy, AuthService],
    exports: [AuthService]
})
export class AuthModule { }
