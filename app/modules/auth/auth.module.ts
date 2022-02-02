import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { RbacModule } from './rbac/rbac.module';

@Module({
  imports: [RbacModule],
  controllers: [RegisterController, LoginController],
  providers: [RegisterService, LoginService],
})
export class AuthModule {}
