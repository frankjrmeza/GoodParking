import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Administradores } from '../models/administradores';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  selectedAdmin: Administradores;
  Administrador: Administradores[];

  readonly url='http://localhost:8090/app/Administrador';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Funcionando');
  }

  getAdministradores(): Observable<Administradores[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Administradores[])
    );
  }

  getAdministrador(id: string): Observable<Administradores> {
    return this.http.get<Administradores>(`${this.url}/${id}`);
  }

  createAdministrador(administrador: Administradores): Observable<Administradores> {
    return this.http.post<Administradores>(this.url, administrador, {headers: this.httpHeaders});
  }

  updateAdministrador(administrador: Administradores): Observable<Administradores> {
    return this.http.put<Administradores>(this.url, administrador, {headers: this.httpHeaders});
  }

  deleteAdministrador(id: string): Observable<Administradores> {
    return this.http.delete<Administradores>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }
}
