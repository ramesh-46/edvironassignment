// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().default(3001),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        console.log("App Module URI:", uri); // Crucial: Log the URI
        return {
          uri,
          useNewUrlParser: true, // Recommended for newer MongoDB drivers
          useUnifiedTopology: true, // Recommended for newer MongoDB drivers
        };
      },
      inject: [ConfigService],
    }),
    TransactionsModule,
  ],
})
export class AppModule {}