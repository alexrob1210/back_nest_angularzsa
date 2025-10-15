// database.provider.ts
import { DataSource } from 'typeorm';

export const databaseProviders = [
  // <- este nombre debe coincidir
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost', 
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'backen_alex_zaruma',
      });
      return dataSource.initialize();
    },
  },
];
