import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map, catchError, interval, take } from 'rxjs';
import { User } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private baseUrl: string = 'http://localhost:3000/';
	private _auth: any | undefined ;
	private _user: string | undefined;

	get auth(): any {
		return { ...this._auth! }
	}

	get user(): any {
		return this._user!;
	}

	constructor
	(	private httpClient: HttpClient,
	) { }

	public obtenerUsuario(){
		const headers = new HttpHeaders({"Authorization": "Bearer " + localStorage.getItem('token') }).set('Content-Type','text/plain; charset=utf-8');
		return this.httpClient.get(`${this.baseUrl}auth/usuario`, {headers, responseType: 'text'});
	}

	login(user: User): Observable <any> {
			this._user = user.name;
			localStorage.setItem('iduser',user.name);
			console.log(localStorage)
			// console.log('Se manda el objeto: ', user);
			// return this.httpClient.post<any>(`${ this.baseUrl }usuarios/create`, user)
			return this.httpClient.post<any>(`${ this.baseUrl }auth/login`, user).
				pipe(
					tap(auth => this._auth = auth.access_token),
					tap(auth => localStorage.setItem('token', auth.access_token )
					),
					catchError(error => {
					  console.error('Login failed', error); // Log de error
					  return of(null); // o alguna otra lógica que maneje el error
					})
					);
		}
	
	logout() {

		localStorage.removeItem('token')
		localStorage.removeItem('iduser')
		this._auth = undefined;
		this._user = undefined;
	}

	verificaAutenticacion():Observable<boolean>{
		console.log('verificado: ', localStorage)
		if(!localStorage.getItem('token')){
			return of(false);
		}
		let token = localStorage.getItem('token');
		if(token === 'undefined' || token === undefined || token === null || token === 'null'){
			return of(false);
		}
		const request_options = this.getHeaders();
		return this.httpClient.get<any>(`${ this.baseUrl }auth/verifica`, request_options).
		pipe(
			map( auth => {
				return true;
			}),
			catchError(err => {
				return of(false);
			})
		);
	}

	private getHeaders(): any {
		let headers = new HttpHeaders({"Authorization": "Bearer " + localStorage.getItem('token') });
		return { headers };
    }

	// public mandarMail(username: string): Observable<any>{
	// 	console.log(username)
	// 	return this.httpClient.post<any>(`${this.baseUrl}auth/resetPass/${username}`, '');
	// }

	// updatePass(token: string, user: any): Observable<any>{
	// 	return this.httpClient.put<any>(`${this.baseUrl}auth/resetPassword/${token}`, user);
	// }

	



	// startAutoRefresh(): void {
	// 	interval(3600000)
	// 	  .pipe(take(1))
	// 	  .subscribe(() => {
	// 		location.reload();
	// 	  });
	// }
}
