import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string | null = '';
  isLoggedIn: boolean = false;
  isOnPersonajesFavoritos: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('name'); // Obtener el nombre del usuario
    }

    // Detectar cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtra solo los eventos de finalización de navegación
    ).subscribe(() => {
      // Verificar si la ruta actual es '/personajesFavoritos'
      this.isOnPersonajesFavoritos = this.router.url === '/personajesFavoritos';
    });
    console.log("Esta es la ruta: ", this.router.url);
  }

  logout(): void {
    // Eliminar el token y el nombre del usuario del localStorage
    // localStorage.removeItem('token');
    // localStorage.removeItem('iduser');
    this.authService.logout();
    this.isLoggedIn = false;
    window.location.reload(); // Recargar la página para que el navbar se actualice
  }
}
