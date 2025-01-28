import { Module } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajesFavoritosEntity } from './entity/personajes-favoritos.entity';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([PersonajesFavoritosEntity])
  ],
  providers: [PersonajesService],
  controllers: [PersonajesController]
})
export class PersonajesModule {}
