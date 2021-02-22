import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './pings/middlewares/test.middleware';
import { Ping } from './pings/ping.entity';
import { PingsModule } from './pings/pings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pgsql',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'pings_db',
      entities: [Ping],
      synchronize: true,
    }),
    PingsModule,
  ],
})
export class AppModule implements NestModule {
  // Can be assynchronous method
  async configure(consumer: MiddlewareConsumer) {
    await consumer
      .apply(LoggerMiddleware)
      // .forRoutes(PingsModule)
      .forRoutes({
        path: 'pings',
        method: RequestMethod.GET,
      });
  }
}
