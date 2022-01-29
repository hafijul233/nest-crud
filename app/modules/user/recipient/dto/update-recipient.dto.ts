import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipientDto } from './create-recipient.dto';

export class UpdateRecipientDto extends PartialType(CreateRecipientDto) {}
