import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createRegisterDto: CreateRegisterDto) {
    return this.registerService.create(createRegisterDto);
  }
}
