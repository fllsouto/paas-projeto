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

  @Get('/user/:userId')
  @HttpCode(200)
  async timeline(@Param('userId') userId: number): Promise<IPing[]> {
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
  async create(@Body() createPingDto: CreatePingDto) {
    const ping = await this.pingsService.create(createPingDto);
    return ping;
  }
}
