import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 140 })
  content: string;

  @Column()
  userId: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ nullable: true })
  pingReferenceId: number;

  @Column({ nullable: true })
  shareId: number;

  @Column({ default: 0 })
  deleted: number;

  @CreateDateColumn()
  createdAt: Date;
}
