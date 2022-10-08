import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Comment extends Model {
  @Column
  content: string;
  @Column
  status: string;
  @Column
  createdAt: Date;
  @Column
  authorId: number;
  @Column
  email: string;
  @Column
  postId: number;
}
