import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ValidationErrorDto } from '../../common/dto/validation.error.dto';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ValidationErrorDto],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
