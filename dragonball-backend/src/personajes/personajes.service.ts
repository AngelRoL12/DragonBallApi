import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { PersonajesFavoritosEntity } from './entity/personajes-favoritos.entity';
import { Repository } from 'typeorm';
import { Params } from './interfaces/interfaces';

@Injectable()
export class PersonajesService {
    constructor(
      private httpService: HttpService,
      @InjectRepository(PersonajesFavoritosEntity)
      private readonly personajesFavoritosRepository: Repository<PersonajesFavoritosEntity>,
    ) {}
    private readonly apiUrl = 'https://dragonball-api.com/api/characters';

    async getCharacters(filters: Params) {
      try {
        // console.log('Haciendo solicitud a:', this.apiUrl);
        // console.log('Parámetros enviados:', filters);
        // Llamada HTTP con manejo de parámetros dinámicos
        const response = await lastValueFrom(
          this.httpService.get(this.apiUrl, {
            params: filters,
          }),
        );
        return response.data; // Devuelve los datos si la solicitud fue exitosa
      } catch (error) {
        // Manejo de errores
        console.log(error, 'Error al obtener los personajes');
      }
    }

    async getCharacterbyId(id: number) {
      try {

        const response = await lastValueFrom(
            this.httpService.get(`${this.apiUrl}/${id}`)
        );
        return response.data; // Devuelve los datos del personaje según el ID
      } catch (error) {
        // Manejo de errores
        console.log(error, 'Error al obtener los personajes');
      }
    }

    async createFavoriteCharacter(userData: Partial<PersonajesFavoritosEntity>): Promise<PersonajesFavoritosEntity> {
      const newFavoriteCharacter = this.personajesFavoritosRepository.create(userData);
      return this.personajesFavoritosRepository.save(newFavoriteCharacter);
    }

    async findAllcreateFavoriteCharacters(): Promise<PersonajesFavoritosEntity[]> {
      return this.personajesFavoritosRepository.find();
    }

    async deleteByIdFavoriteCharacter(id: number): Promise<void> {
      const result = await this.personajesFavoritosRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
    }
}
