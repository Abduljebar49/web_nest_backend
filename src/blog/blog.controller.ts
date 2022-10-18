import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { BlogDto } from 'src/dto/create-blog.dto';
import { Blog } from './blog.entitiy';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly service: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Blog> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createBlogDto: Blog): Promise<Blog> {
    return this.service.create(createBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<string> {
    return this.service.remove(id);
  }
}
