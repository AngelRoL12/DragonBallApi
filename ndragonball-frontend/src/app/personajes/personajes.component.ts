import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PersonajesService } from './personajes.service';
import { Personaje } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  constructor(private personajesService: PersonajesService, private cdr: ChangeDetectorRef, private router: Router){}
  personajes: Personaje[] = [];
  personajesTabla: Personaje[] = [];
  personajesFavoritos: Personaje[] = [];
  @ViewChild('dt2') dt2!: Table; // Referencia a la tabla

  async ngOnInit() {
    // Llama al servicio en el hook de inicialización
    await this.cargarPersonajes();
    await this.cargarPersonajesFavoritos();
  }

  async cargarPersonajes() {
    try {
      let respuesta = await this.personajesService.getPersonajes();
      console.log(respuesta);  // Verifica toda la respuesta
      if (Array.isArray(respuesta.items)) {
        this.personajes = respuesta.items;
        console.log('Personajes obtenidos:', this.personajes);
      } else {
        console.error('La propiedad "items" no es un arreglo.');
      }
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    }
  }

  FilaSeleccionada(personaje: Personaje) {
    this.router.navigate(['/personaje', personaje.id]);
  }

  async Favorito(personaje: Personaje){
    console.log("Personaje seleccionado: ", personaje)

    if (personaje.favorito == true){
      let response = await this.personajesService.createPersonajeFavorito(personaje)
      console.log("Se creo: ", response)
    }
    else {
      let response = await this.personajesService.deletePersonajeFavorito(personaje.id)
      console.log("Se elimino: ", response)
    }
  }

  async cargarPersonajesFavoritos() {
    try {
      let respuesta = await this.personajesService.getPersonajesFavoritos();
      console.log("Personajes Favoritos", respuesta);  // Verifica toda la respuesta
     
      this.personajesFavoritos = respuesta;
      console.log('Personajes obtenidos:', this.personajesFavoritos);

      this.personajes.forEach((personaje) => {
        // Si el personaje está en personajesFavoritos, establecer favorito como true
        const isFavorito = this.personajesFavoritos.some((fav) => fav.id === personaje.id);
        // console.log("For: ", personaje, isFavorito);
        personaje.favorito = isFavorito;  // Si está en favoritos será true, sino false
      });
      
      this.personajesTabla = this.personajes
      
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    }
  }

  filtrarTabla(event: Event) {
    console.log("Evento: ", event);
    const inputElement = event.target as HTMLInputElement; // Hacemos el type assertion aquí
    this.dt2.filterGlobal(inputElement.value, 'contains');
  }
}
