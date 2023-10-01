import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login-user.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: LoginUserDTO) {
    return await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
  }
}
