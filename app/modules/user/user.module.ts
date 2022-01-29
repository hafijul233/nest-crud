import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfileModule } from './profile/profile.module';
import { RecipientModule } from './recipient/recipient.module';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    ProfileModule,
    RecipientModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RouterModule.register([
      {
        path: 'users/:user',
        module: RecipientModule,
      },
      {
        path: 'users/:user',
        module: ProfileModule,
      },
    ]),
  ],
})
export class UserModule {}
