import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ping } from './ping.entity';
import { IPing } from './pings.interface';

@Injectable()
export class PingsService {
  constructor(
    @Inject('PING_REPOSITORY')
    private pingRepository: Repository<Ping>,
  ) {}

  async create(ping: IPing): Promise<IPing> {
    const pingObj = this.pingRepository.create(ping);
    return this.pingRepository.save(pingObj);
  }

  async findOne(id: number): Promise<IPing> {
    return this.pingRepository.findOne(id);
  }

  async findAll(): Promise<IPing[]> {
    return this.pingRepository.find();
  }
}
