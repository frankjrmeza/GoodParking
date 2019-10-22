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

  readonly url='http://localhost:8090/app/persona';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Funcionando');
  }

  getPersonas(): Observable<Usuarios[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Usuarios[])
    );
  }

  getPersona(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }

  createPersona(persona: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url, persona, {headers: this.httpHeaders});
  }

  updatePersona(persona: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.url, persona, {headers: this.httpHeaders});
  }

  deletePersona(id: number): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }
}



