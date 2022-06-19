import { BadRequestException, Body, Controller, Get, Post, Request } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { UserService } from '../services/user.service';
import { Public } from '../guards/public.guard';
import { AuthService } from '../auth/auth.service';
import { UserCreateDto } from '../Dtos/Users/user-create.dto';

@Controller("auth")
export class AppController {
  constructor(private readonly userService: UserService,
    private authService: AuthService) { }

  @Public()
  @Post("signup")
  async register(
    @Body() createuserDto: UserCreateDto
  ) {

    const passwordHash = await bcrypt.hash(createuserDto.password, 14);

    return this.userService.create({
      firstName: createuserDto.firstName,
      lastName: createuserDto.lastName,
      email: createuserDto.email,
      password: passwordHash
    })
  }

  @Public()
  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    const user = await this.userService.findOne({ email: email });
    if (!user) {
      throw new BadRequestException("Invalid email/password")
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException("Invalid email/password")
    }
    const jwt = await this.authService.getToken(user);

    return {
      accessToken: jwt
    };
  }

  @Get("profile")
  async getProfile(@Request() req) {
    let user: any = await this.userService.findOne({ id: req.user.userId });

    const { password, ...result } = user;
    return result;
  }
}
