import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Neshida } from './Neshida.entity';
import { NeshidaService } from './neshida.service';

@Controller('neshidas')
export class NeshidaController {
    

    constructor(private readonly service: NeshidaService) {}

    @Get()
    findAll(): Promise<Neshida[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Neshida> {
      return this.service.findOne(id);
    }
  
    @Post()
    create(@Body() createNeshidaDto: Neshida): Promise<Neshida> {
      return this.service.create(createNeshidaDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<string> {
      return this.service.remove(id);
    }
}
