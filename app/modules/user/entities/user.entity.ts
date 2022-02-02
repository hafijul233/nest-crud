import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  parent_id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  mobile_number: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  pin: string;

  @Column()
  @ApiProperty()
  active: string;

  @Column()
  @ApiProperty()
  wrong_password: boolean;

  @Column()
  @ApiProperty()
  wrong_pin: boolean;

  @Column()
  @ApiProperty()
  risk_profiling: string;

  @Column()
  @ApiProperty()
  is_jompay_allowed: string;

  @Column()
  @ApiProperty()
  app_version: string;

  @Column()
  @ApiProperty()
  fcm_token: string;

  @Column()
  @ApiProperty()
  default_language: string;

  @Column()
  @ApiProperty()
  default_currency: string;

  @Column()
  @ApiProperty()
  default_country_id: number;

  @Column()
  @ApiProperty()
  applicant_id: string;

  @Column()
  @ApiProperty()
  check_id: string;

  @Column()
  @ApiProperty()
  application_id: string;

  @Column()
  @ApiProperty()
  document_id: string;

  @Column()
  @ApiProperty()
  is_on_fido: string;

  @Column()
  @ApiProperty()
  on_fido_update_count: number;

  @Column()
  @ApiProperty()
  on_fido_check_count: number;

  @Column()
  @ApiProperty()
  remember_token: string;

  @Column()
  @ApiProperty()
  deleted_by: number;

  @Column()
  @ApiProperty()
  created_by: number;

  @Column()
  @ApiProperty()
  updated_by: number;

  @Column()
  @ApiProperty()
  deleted_at: string;

  @Column()
  @ApiProperty()
  created_at: string;

  @Column()
  @ApiProperty()
  updated_at: string;
}
