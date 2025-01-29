import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/usuarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usuarioRepository: Repository<UserEntity>
    ){}

    async findUsuario(name: string): Promise<UserEntity> {
        // Cambia el tipo a UserEntity | null
        const response = await this.usuarioRepository.findOne({
          where: {
            name: name, // Filtra por el campo 'name'
          },
        });
    
        // Verifica si el valor es null
        if (!response) {
          throw new Error('No se encontró el usuario');
        }
    
        // Si no es null, retorna el usuario
        return response;
    }

    async consultaEstatusUsuario(name: string): Promise<boolean> {
        // Cambia el tipo a UserEntity | null
        const response = await this.usuarioRepository.findOne({
          where: {
            name: name, // Filtra por el campo 'name'
          },
        });
    
        // Verifica si el valor es null
        if (!response) {
          throw new Error('No se encontró el usuario');
        }
    
        // Si no es null, retorna el usuario
        return response.status;
    }


    async createUser(userData: Partial<UserEntity>): Promise<UserEntity> {
          const newFavoriteCharacter = this.usuarioRepository.create(userData);
          console.log("Se creo correctamente: ", newFavoriteCharacter);
          return this.usuarioRepository.save(newFavoriteCharacter);
        }
    
}
