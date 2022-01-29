import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProfileModule } from './profile/profile.module';
import { RecipientModule } from './recipient/recipient.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ProfileModule, RecipientModule],
})
export class UserModule {}
