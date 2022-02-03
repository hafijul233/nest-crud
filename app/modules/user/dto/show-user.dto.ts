import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ShowUserDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly mobileNumber: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNumber()
  readonly pin: string;

  @ApiProperty()
  @IsString()
  readonly active?: string;

  @ApiProperty()
  @IsString()
  readonly riskProfiling?: string;

  @ApiProperty()
  @IsString()
  readonly isJompayAllowed?: string;

  @ApiProperty()
  @IsString()
  readonly appVersion?: string;

  @ApiProperty()
  @IsString()
  readonly fcmToken?: string;

  @ApiProperty()
  @IsString()
  readonly defaultLanguage?: string;

  @ApiProperty()
  @IsString()
  readonly defaultCurrency?: string;

  @ApiProperty()
  @IsNumber()
  readonly defaultCountryId?: number;

  @ApiProperty()
  @IsString()
  readonly applicantId?: string;

  @ApiProperty()
  @IsString()
  readonly checkId?: string;

  @ApiProperty()
  @IsString()
  readonly applicationId?: string;

  @ApiProperty()
  @IsString()
  readonly documentId?: string;

  @ApiProperty()
  @IsString()
  readonly isOnFido?: string;

  @ApiProperty()
  @IsString()
  readonly onFidoUpdateCount?: number;

  @ApiProperty()
  @IsString()
  readonly onFidoCheckCount?: number;
}
