import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  collect_id: string;

  @IsNotEmpty()
  @IsString()
  school_id: string;

  @IsString()
  gateway?: string;

  order_amount?: number;
  transaction_amount?: number;
  status?: string;

  @IsNotEmpty()
  @IsString()
  custom_order_id: string;
}