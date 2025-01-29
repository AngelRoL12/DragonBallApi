import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { DetalleComponent } from './detalle/detalle.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [
    PersonajesComponent,
    DetalleComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    TagModule,
    ButtonModule, 
    CheckboxModule,
    FormsModule,
    IconFieldModule,
    InputIconModule
  ]
})
export class PersonajesModule { }
