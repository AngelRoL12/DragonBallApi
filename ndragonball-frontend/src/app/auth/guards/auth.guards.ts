import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.verificaAutenticacion().pipe(
      map((autenticado) => {
        if (!autenticado) {
          // Si no está autenticado, redirige a la página de login
          return this.router.createUrlTree(['/login']);
        }
        // Si está autenticado, permite la navegación
        return true;
      })
    );
  }
}
