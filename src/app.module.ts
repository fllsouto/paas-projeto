import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './pings/middlewares/test.middleware';
import { PingsModule } from './pings/pings.module';

@Module({
  imports: [PingsModule],
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
