import { Module } from '@nestjs/common';
import { PingsController } from './pings.controller';
import { PingsService } from './pings.service';
import { pingProviders } from './pings.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PingsController],
  providers: [...pingProviders, PingsService],
})
export class PingsModule {}
