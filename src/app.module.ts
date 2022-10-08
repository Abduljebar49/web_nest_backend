import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NeshidaModule } from './neshida/neshida.module';
import { BlogModule } from './blog/blog.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [NeshidaModule, BlogModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'islamic',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
