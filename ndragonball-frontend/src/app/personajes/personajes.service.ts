import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Personaje, PersonajesResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  constructor(private apiService: ApiService) { }

  async getPersonajes(): Promise<PersonajesResponse> {
    try {
      const data = await this.apiService.getData('/consulta'); // Llama al método del ApiService
      return data; // Retorna los datos al componente
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Relanza el error para que el componente pueda manejarlo
    }
  }

  async getPersonajesById(id: number): Promise<Personaje> {
    try {
      const data = await this.apiService.getData(`/consulta/${id}`); // Llama al método del ApiService
      return data; // Retorna los datos al componente
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Relanza el error para que el componente pueda manejarlo
    }
  }

  async getPersonajesFavoritos(): Promise<Personaje[]> {
    try {
      const data = await this.apiService.getData('/favorito'); // Llama al método del ApiService
      return data; // Retorna los datos al componente
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Relanza el error para que el componente pueda manejarlo
    }
  }

  async createPersonajeFavorito(personaje: Personaje): Promise<Personaje> {
    try {
      const data = await this.apiService.postData(`/favorito`, personaje); // Llama al método del ApiService
      return data; // Retorna los datos al componente
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Relanza el error para que el componente pueda manejarlo
    }
  }

  async deletePersonajeFavorito(id: number): Promise<Personaje> {
    try {
      const data = await this.apiService.deleteData(`/favorito/${id}`); // Llama al método del ApiService
      return data; // Retorna los datos al componente
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      throw error; // Relanza el error para que el componente pueda manejarlo
    }
  }

}
