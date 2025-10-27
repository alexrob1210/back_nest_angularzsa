import { DataSource } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { Inject } from '@nestjs/common';

export const categoriaProvider = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (DataSource: DataSource) => DataSource.getRepository(Categoria),
    inject: ['DATABASE_CONNECTION'],
  },
];
