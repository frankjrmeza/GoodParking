import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  selectedReserva: Reserva;
  reserva: Reserva[];

  readonly url='http://localhost:8090/app/Reserva';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Funcionando');
  }

  getReservas(): Observable<Reserva[]> {
    return this.http.get(this.url).pipe(
      map(data => data as Reserva[])
    );
  }

  getReserva(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.url}/${id}`);
  }

  createReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.url, reserva, {headers: this.httpHeaders});
  }

  updateReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(this.url, reserva, {headers: this.httpHeaders});
  }

  deleteReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }
}
