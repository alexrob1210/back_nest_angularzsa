import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';
import * as path from 'path';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const envFilePath = path.resolve(__dirname, `../../../.env.${env}`);

    if (!fs.existsSync(envFilePath)) {
      console.error(`${envFilePath} no existe`);
      process.exit(1);
    }

    this.envConfig = parse(fs.readFileSync(envFilePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
