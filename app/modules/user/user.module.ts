import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfileModule } from './profile/profile.module';
import { RecipientModule } from './recipient/recipient.module';
import { RouterModule } from '@nestjs/core';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    ProfileModule,
    RecipientModule,
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
