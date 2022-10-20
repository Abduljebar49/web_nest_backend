import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Neshida } from './Neshida.entity';

@Injectable()
export class NeshidaService {
    constructor(
        @InjectModel(Neshida) private NeshidaModel: typeof Neshida
    ){
    }

    async findAll():Promise<Neshida[]>{
        return this.NeshidaModel.findAll();
    }

    async findOne(id:number):Promise<Neshida>{
        return this.NeshidaModel.findOne({
            where:{
                id
            }
        });
    }

    async remove(id:number):Promise<string>{
        const Neshida = await this.NeshidaModel.findOne({
            where:{
                id
            }
        })
        if(Neshida){
            await Neshida.destroy();
            return "Successfully deleted";
        }
        else{
            return "Not found";
        }
    }

    async create(createNeshidaDto:Neshida):Promise<Neshida>{
        return await this.NeshidaModel.create({
            title: createNeshidaDto.title,
            // content: createNeshidaDto.content,
            // tags: createNeshidaDto.tags,
            // status: createNeshidaDto.status,
            // authorId: createNeshidaDto.authorId
        });
    }
}
