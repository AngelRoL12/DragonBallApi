// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/'; // La URL de tu backend
//   private loggedIn = new BehaviorSubject<boolean>(false);
//   private token: string | null = null;

//   constructor(private http: HttpClient, private router: Router) {}

//   // Método para iniciar sesión
//   login(username: string, password: string): Observable<any> {
//     return this.http
//       .post<any>(`${this.apiUrl}/auth/login`, { username, password })
//       .pipe(
//         map((response) => {
//           if (response.token) {
//             this.token = response.token;
//             this.loggedIn.next(true);
//             if (this.token) {
//               localStorage.setItem('authToken', this.token); // Almacena el token en el localStorage
//             }
//           }
//           return response;
//         }),
//         catchError((error) => {
//           this.loggedIn.next(false);
//           throw error;
//         })
//       );
//   }

//   // Verifica si el usuario está autenticado
//   verificaAutenticacion(): Observable<boolean> {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       this.token = token;
//       this.loggedIn.next(true);
//       return new Observable((observer) => observer.next(true));
//     }
//     this.loggedIn.next(false);
//     return new Observable((observer) => observer.next(false));
//   }

//   // Método para cerrar sesión
//   logout(): void {
//     localStorage.removeItem('authToken');
//     this.token = null;
//     this.loggedIn.next(false);
//     this.router.navigate(['/login']);
//   }

//   // Getter para saber si está logueado
//   isLoggedIn(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }
// }
