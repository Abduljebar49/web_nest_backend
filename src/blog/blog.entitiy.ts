import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Blog extends Model {
  @Column
  title: string;

  @Column
  content: string;

  @Column
  tags: string;

  @Column
  status: string;

  @Column({defaultValue: new Date()})
  createdAt: Date;

  @Column({defaultValue: new Date()})
  updatedAt: Date;

  @Column
  authorId: number;
}
