import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Headers,
  Put,
} from '@nestjs/common';
import { IPing } from './pings.interface';
import { CreatePingDto } from './dto/createPing.dto';
import { PingsService } from './pings.service';

@Controller('pings')
export class PingsController {
  constructor(private pingsService: PingsService) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<IPing[]> {
    const pings = await this.pingsService.findAll();
    return pings;
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: number): Promise<IPing> {
    const ping = await this.pingsService.findOne(id);
    return ping;
  }

  @Get('/timeline/all')
  @HttpCode(200)
  async timeline(@Headers() header): Promise<IPing[]> {
    const {
      userId
    } = header;

    const pings = await this.pingsService.timeline(userId);
    return pings;
  }

  @Put(':pingId/like/')
  @HttpCode(200)
  async like(@Param('pingId') pingId: number): Promise<IPing> {
    const ping = await this.pingsService.like(pingId);
    return ping;
  }

  @Post()
  @HttpCode(201)
  async create(@Headers() header, @Body() createPingDto: CreatePingDto) {
    createPingDto.userId = header.userId;

    const ping = await this.pingsService.create(createPingDto);
    return ping;
  }
}
