import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Neshida extends Model {
  
  @Column
  title: string;

  @Column
  audioUrl: string;

  @Column
  tags: string;

  @Column({defaultValue: new Date()})
  createdAt: Date;

  @Column({defaultValue: new Date()})
  updatedAt: Date;

  @Column
  songerId: number;
}