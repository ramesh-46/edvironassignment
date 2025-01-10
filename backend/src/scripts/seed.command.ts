// src/scripts/seed.command.ts (or seed.script.ts - the name is not important)
import { Command } from 'commander'; // If you use commander
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { TransactionsService } from '../transactions/transactions.service';
import { CreateTransactionDto } from '../transactions/dto/create-transaction.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const transactionService = app.get(TransactionsService);

  const transactionsToSeed: CreateTransactionDto[] = [
    // ... your seed data
  ];
  try {
    for (const transaction of transactionsToSeed) {
      const createdTransaction = await transactionService.create(transaction);
      console.log('Transaction created:', createdTransaction); // Log each created transaction
    }
    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}


// Using commander (optional but recommended)
const program = new Command();
program
  .command('seed')
  .description('Seed the database')
  .action(bootstrap);

program.parse(process.argv);
// Or just call bootstrap() directly if you don't use commander
// bootstrap();