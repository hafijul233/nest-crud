import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './services/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserPaginateDto } from './dto/user.paginate.dto';
import { Request } from 'express';
import { ShowUserDto } from './dto/show-user.dto';
import { ValidationErrorDto } from '../../common/dto/validation.error.dto';

@ApiTags('User Resource')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({
    description: 'Create new user',
    type: CreateUserDto,
  })
  @ApiOkResponse({
    description: 'Return newly created user info',
    type: ShowUserDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed message',
    type: ValidationErrorDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiBody({
    description: 'List of all system users',
    type: UserPaginateDto,
  })
  @ApiOkResponse({
    description: 'List of all users',
    isArray: true,
    type: UserPaginateDto,
  })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  findAll(@Req() request: Request, @Body() body: Body) {
    const inputs = request.body;
    return body;
    //return this.userService.findAll(inputs);
  }

  @Get(':id')
  @ApiBody({
    description: 'Return a single user details',
    type: CreateUserDto,
  })
  @ApiOkResponse({
    description: 'Return a single user details',
    type: ShowUserDto,
  })
  @ApiNotFoundResponse({
    description: 'If no user found by this id',
    type: ValidationErrorDto,
  })
  findOne(@Param('id') id: string) {
    this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
