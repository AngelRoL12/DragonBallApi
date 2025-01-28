import { ChangeDetectorRef, Component } from '@angular/core';
import { Personaje } from '../../interfaces/interfaces';
import { PersonajesService } from '../personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  constructor(private personajesService: PersonajesService, private cdr: ChangeDetectorRef, private router: Router){}
    personajes: Personaje[] = [];
  
    async ngOnInit() {
      // Llama al servicio en el hook de inicialización
      await this.cargarPersonajes();
    }
  
    async cargarPersonajes() {
      try {
        let respuesta = await this.personajesService.getPersonajesFavoritos();
        console.log(respuesta);  // Verifica toda la respuesta
       
        this.personajes = respuesta;
        console.log('Personajes obtenidos:', this.personajes);
        
      } catch (error) {
        console.error('Error al cargar personajes:', error);
      }
    }
  
    FilaSeleccionada(personaje: Personaje) {
      this.router.navigate(['personaje', personaje.id]);
    }
  
    async Favorito(personaje: Personaje){
      console.log("Personaje seleccionado: ", personaje)
  
      if (personaje.favorito == true){
        let response = await this.personajesService.createPersonajeFavorito(personaje)
        console.log("Respuesta: ", response)
      }
      else {
        let response = await this.personajesService.deletePersonajeFavorito(personaje.id)
        console.log("Respuesta: ", response)
      }
      await this.cargarPersonajes();
    }
}
