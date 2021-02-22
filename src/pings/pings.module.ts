import { Module } from '@nestjs/common';
import { PingsController } from './pings.controller';
import { PingsService } from './pings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ping } from './ping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ping])],
  controllers: [PingsController],
  providers: [PingsService],
})
export class PingsModule {}
