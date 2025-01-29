import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.routes';
import { PersonajesModule } from './personajes/personajes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarModule } from 'primeng/toolbar'; // Importa ToolbarModule
import { ButtonModule } from 'primeng/button';   // Importa ButtonModule


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    AuthModule,
    PersonajesModule,
    TableModule,
    ToolbarModule, 
    ButtonModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
