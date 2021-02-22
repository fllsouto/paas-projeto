import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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

  @Post()
  @HttpCode(201)
  async create(@Body() createPingDto: CreatePingDto) {
    // const { token } = headers;
    const ping = await this.pingsService.create(createPingDto);
    return ping;
  }
}
