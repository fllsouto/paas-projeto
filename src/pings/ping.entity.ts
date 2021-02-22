import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IPing } from './pings.interface';

@Entity()
export class Ping implements IPing {
  @PrimaryColumn()
  id: number;

  @Column({ length: 255 })
  content: string;

  @Column()
  userId: number;

  @Column()
  likes: number;

  @Column()
  pingReferenceId: number;
}
