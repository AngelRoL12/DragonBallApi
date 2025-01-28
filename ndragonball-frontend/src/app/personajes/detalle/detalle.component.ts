import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../personajes.service';
import { Personaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  personajeId: number = 0;
  personaje!: Personaje;

  constructor(private personajesService: PersonajesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null && Number(id) > 0) {
        this.personajeId = + id;  // Convertimos el valor a número si no es null
        this.getPersonajesById(this.personajeId)
      } else {
        // Manejar el caso en el que 'id' no esté presente
        console.error('ID no encontrado en la URL');
      }
    });
  }

  async getPersonajesById(id: number) {
    try {
      let respuesta = await this.personajesService.getPersonajesById(id);
      console.log(respuesta);  // Verifica toda la respuesta
      this.personaje = respuesta;
      console.log('Personajes obtenidos:', this.personaje);
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    }
  }
}
