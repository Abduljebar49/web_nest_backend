import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.entitiy';

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

    async remove(id:number):Promise<void>{
        const blog = await this.blogModel.findOne({
            where:{
                id
            }
        })
        await blog.destroy();
    }

    async create(data:Blog):Promise<Blog>{
        return await this.blogModel.create({data});
    }
}
