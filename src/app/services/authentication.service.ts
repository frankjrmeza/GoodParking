import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from '../Models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private service: UsuariosService) { }

  isUserLoggedIn() {
    let user = localStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('tipo');
    localStorage.removeItem('placaPechera');
  }
}