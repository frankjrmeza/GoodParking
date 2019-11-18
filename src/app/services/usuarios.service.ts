import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../Models/usuarios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  selectedPersona: Usuarios;
  usuarios: Usuarios[];

  readonly url='http://localhost:8090/app/Usuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Funcionando');
  }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Usuarios[])
    );
  }

  getUsuario(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }

  createUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url, usuario, {headers: this.httpHeaders});
  }

  updateUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.url, usuario, {headers: this.httpHeaders});
  }

  deleteUsuario(id: number): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }
}



