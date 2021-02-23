import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthMiddleware } from './pings/middlewares/authmiddleware';
import { LoggerMiddleware } from './pings/middlewares/test.middleware';
import { PingsModule } from './pings/pings.module';

@Module({
  imports: [DatabaseModule, PingsModule],
})
export class AppModule implements NestModule {
  // Can be assynchronous method
  async configure(consumer: MiddlewareConsumer) {
    await consumer
      .apply(LoggerMiddleware, AuthMiddleware)
      // .forRoutes(PingsModule)
      .forRoutes({
        path: 'pings',
        method: RequestMethod.ALL,
      });
  }
}
