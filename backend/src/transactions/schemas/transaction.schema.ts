import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop({ required: true })
  collect_id: string;

  @Prop({ required: true })
  school_id: string;

  @Prop()
  gateway?: string;

  @Prop()
  order_amount?: number;

  @Prop()
  transaction_amount?: number;

  @Prop()
  status?: string;

  @Prop({ required: true, unique: true })
  custom_order_id: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);