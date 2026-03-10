import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(token: string, @Body() registerDto: RegisterDto) {
    if(token === null)
      throw new UnauthorizedException();

    return this.authService.register(token, registerDto);
  }
}
