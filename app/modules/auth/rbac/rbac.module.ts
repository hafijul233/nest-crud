import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { PermissionController } from './permission.controller';
import { RoleService } from './role.service';
import { PermissionService } from './permission.service';

@Module({
  controllers: [RoleController, PermissionController],
  providers: [RoleService, PermissionService],
})
export class RbacModule {}
