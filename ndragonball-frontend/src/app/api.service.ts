import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private axiosInstance: AxiosInstance;
  private apiUrl = 'http://localhost:3000/personajes';

  constructor() {
    // Configurar la instancia de Axios
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl, // Cambia esto por tu URL base
      timeout: 5000, // Tiempo máximo para la solicitud
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Método para hacer un GET
  async getData(endpoint: string, params: Params = {}): Promise<any> {
    try {

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token de autenticación no encontrado');
      }

      const response = await this.axiosInstance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: params,
      });
      return response.data; // Retorna solo los datos
    } catch (error: any) {
      console.error('Error en GET:', error.message);
      throw error; // Lanza el error para que el componente lo maneje
    }
  }

  // Método para hacer un POST
  async postData(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.axiosInstance.post(endpoint, data);
      return response.data; // Retorna solo los datos
    } catch (error: any) {
      console.error('Error en POST:', error.message);
      throw error; // Lanza el error para que el componente lo maneje
    }
  }

  // Método para hacer un DELETE por ID
  async deleteData(endpoint: string): Promise<any> {
    try {
      const response = await this.axiosInstance.delete(endpoint);
      return response.data; // Retorna solo los datos
    } catch (error: any) {
      console.error('Error en DELETE:', error.message);
      throw error; // Lanza el error para que el componente lo maneje
    }
  }
}
