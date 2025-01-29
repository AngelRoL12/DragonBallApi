import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajesModule } from './personajes/personajes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajesFavoritosEntity } from './personajes/entity/personajes-favoritos.entity';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UserEntity } from './usuarios/entity/usuarios.entity';

@Module({
  imports: [PersonajesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nombre del archivo
      entities: [PersonajesFavoritosEntity, UserEntity], // Carga todas las entidades automáticamente
      synchronize: true, // Solo en desarrollo
    }),
    AuthModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
