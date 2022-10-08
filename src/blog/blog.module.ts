import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogController } from './blog.controller';
import { Blog } from './blog.entitiy';
import { BlogService } from './blog.service';

@Module({
    imports:[
        SequelizeModule.forFeature([Blog])
    ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
