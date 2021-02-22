import { Connection } from 'typeorm';
import { Ping } from './ping.entity';

export const pingProviders = [
  {
    provide: 'PING_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Ping),
    inject: ['DATABASE_CONNECTION'],
  },
];
