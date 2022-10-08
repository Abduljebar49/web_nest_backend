import { Controller,Get,Param,Delete,Post } from '@nestjs/common';
import { Blog } from './blog.entitiy';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    constructor(private readonly service:BlogService){}

    @Get()
    findAll():Promise<Blog[]>{
        return this.service.findAll()
    }

    @Get('id')
    findOne(@Param('id') id:number):Promise<Blog>{
        return this.service.findOne(id);
    }

    // @Post(@Body() )
    // create
}
