import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetalleComponent } from './personajes/detalle/detalle.component';
import { FavoritosComponent } from './personajes/favoritos/favoritos.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth.guards';
// import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personajes', component: PersonajesComponent, canActivate: [AuthGuard] },
  { path: 'personaje/:id', component: DetalleComponent },
  { path: 'personajesFavoritos', component: FavoritosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'personajes', component: PersonajesComponent, canActivate: [authGuard] }, // Usa la función como guard
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
