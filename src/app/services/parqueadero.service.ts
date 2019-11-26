import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Parqueadero } from '../models/parqueadero';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {
  selectedParqueadero: Parqueadero;
  parqueadero: Parqueadero[];

  readonly url='http://localhost:8090/app/Parqueadero';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Funcionando');
  }

  getParqueaderos(): Observable<Parqueadero[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Parqueadero[])
    );
  }

  getParqueadero(id: string): Observable<Parqueadero> {
    return this.http.get<Parqueadero>(`${this.url}/${id}`);
  }

  createParquedero(parqueadero: Parqueadero): Observable<Parqueadero> {
    return this.http.post<Parqueadero>(this.url, parqueadero, {headers: this.httpHeaders});
  }

  updateParqueadero(parqueadero: Parqueadero): Observable<Parqueadero> {
    return this.http.put<Parqueadero>(this.url, parqueadero, {headers: this.httpHeaders});
  }

  deleteParqueadero(id: string): Observable<Parqueadero> {
    return this.http.delete<Parqueadero>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }
}
