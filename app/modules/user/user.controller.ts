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
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserPaginateDto } from './dto/user.paginate.dto';
import { Request } from 'express';

@ApiTags('User Resource')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiBody({
    description: 'List of all system users',
    type: UserPaginateDto,
  })
  @ApiOkResponse({
    description: 'Paginated List of all users',
    isArray: true,
    type: UserPaginateDto,
  })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  findAll(@Req() request: Request, @Body() body: Body) {
    const inputs = request.body;
    return body;
    //return this.userService.findAll(inputs);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
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
