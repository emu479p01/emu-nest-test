import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userid: number;

  @PrimaryColumn()
  @Column({ length: 30 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  email: string;
}
