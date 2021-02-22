import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT) || 3306,
  database: process.env.DATABASE_DBNAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));
