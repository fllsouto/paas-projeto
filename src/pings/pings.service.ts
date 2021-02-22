import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ping } from './ping.entity';
import { IPing } from './pings.interface';

@Injectable()
export class PingsService {
  constructor(
    @InjectRepository(Ping)
    private pingRepository: Repository<Ping>,
  ) {}

  async create(ping: IPing): Promise<IPing> {
    const pingObj = new Ping();
    pingObj.content = ping.content;
    pingObj.userId = ping.userId;
    return this.pingRepository.save(pingObj);
  }

  async findOne(id: number): Promise<IPing> {
    return this.pingRepository.findOne(id);
  }

  async findAll(): Promise<IPing[]> {
    return this.pingRepository.find();
  }
}
