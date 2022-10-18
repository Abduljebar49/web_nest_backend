import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogDto } from 'src/dto/create-blog.dto';
import { Blog } from './blog.entitiy';
import { Logger } from '@nestjs/common';

@Injectable()
export class BlogService {
    constructor(
        @InjectModel(Blog) private blogModel: typeof Blog
    ){
    }

    async findAll():Promise<Blog[]>{
        return this.blogModel.findAll();
    }

    async findOne(id:number):Promise<Blog>{
        return this.blogModel.findOne({
            where:{
                id
            }
        });
    }

    async remove(id:number):Promise<string>{
        const blog = await this.blogModel.findOne({
            where:{
                id
            }
        })
        if(blog){
            await blog.destroy();
            return "Successfully deleted";
        }
        else{
            return "Not found";
        }
    }

    async create(createBlogDto:Blog):Promise<Blog>{
        return await this.blogModel.create({
            title: createBlogDto.title,
            content: createBlogDto.content,
            tags: createBlogDto.tags,
            status: createBlogDto.status,
            authorId: createBlogDto.authorId
        });
    }
}
