import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NeshidaController } from './neshida.controller';
import { Neshida } from './Neshida.entity';
import { NeshidaService } from './neshida.service';

@Module({
  imports: [SequelizeModule.forFeature([Neshida])],
  controllers: [NeshidaController],
  providers: [NeshidaService],
})
export class NeshidaModule {}
