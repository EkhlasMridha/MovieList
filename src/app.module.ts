import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/Users';
import { UserService } from './services/user.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './guards/JwtAuthGuard';
import { EmailExistsValidator } from './validators/email-exists.validator';
import { ServiceModule } from './services/module/service.module';
import { MovieController } from './controllers/movie.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "ababadb",
      // autoLoadEntities: true,
      entities: [User],
      synchronize: true
    }),
    AuthModule,
    ServiceModule,
  ],
  controllers: [AppController, MovieController],
  providers: [
    AppService,
    UserService,
    EmailExistsValidator,
    {
      provide: "APP_GUARD",
      useClass: JwtAuthGuard
    },
  ],
})
export class AppModule { }
