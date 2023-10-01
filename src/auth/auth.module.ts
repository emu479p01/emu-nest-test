import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users/entities/users.entity';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
