import { IsString } from 'class-validator';

export class UpdateTransactionDto {
  @IsString()
  status?: string;
}