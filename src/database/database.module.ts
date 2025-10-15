// database.module.ts
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider'; // <- mismo nombre

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
