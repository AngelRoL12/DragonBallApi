import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajesModule } from './personajes/personajes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajesFavoritosEntity } from './personajes/entity/personajes-favoritos.entity';

@Module({
  imports: [PersonajesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nombre del archivo
      entities: [PersonajesFavoritosEntity], // Carga todas las entidades automáticamente
      synchronize: true, // Solo en desarrollo
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
