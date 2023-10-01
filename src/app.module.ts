import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/users.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [Users],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
