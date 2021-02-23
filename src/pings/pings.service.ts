import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePingDto } from './dto/createPing.dto';
import { Ping } from './ping.entity';
import { IPing } from './pings.interface';

@Injectable()
export class PingsService {
  constructor(
    @InjectRepository(Ping)
    private pingRepository: Repository<Ping>,
  ) {}

  async create(ping: CreatePingDto): Promise<IPing> {
    const { id, content, pingReferenceId, shareId, userId } = ping;
    if (content.length > 140) throw new Error();
    const pingObj: CreatePingDto = {
      id,
      content,
      pingReferenceId,
      shareId,
      userId,
    };
    return this.pingRepository.save(pingObj);
  }

  async findOne(id: number): Promise<IPing> {
    return this.pingRepository.findOne(id);
  }

  async findAll(): Promise<IPing[]> {
    return this.pingRepository.find();
  }

  async timeline(userId: number): Promise<IPing[]> {
    return this.pingRepository.find({ where: { userId: userId } });
  }

  async like(pingId): Promise<IPing> {
    const ping = await this.pingRepository.findOne({ where: { id: pingId } });
    ping.likes++;
    return this.pingRepository.save(ping);
  }
}
