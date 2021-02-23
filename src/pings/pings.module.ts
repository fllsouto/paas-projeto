import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PingsController } from './pings.controller';
import { PingsService } from './pings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ping } from './ping.entity';
import { AuthMiddleware } from './middlewares/authmiddleware';

@Module({
  imports: [TypeOrmModule.forFeature([Ping])],
  controllers: [PingsController],
  providers: [PingsService],
})
export class PingsModule {
  async configure(consumer: MiddlewareConsumer) {
    await consumer
      .apply(AuthMiddleware)
      .forRoutes(PingsModule)
     ;
  }
}
