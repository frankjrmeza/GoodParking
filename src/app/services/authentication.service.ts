import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from '../Models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private service: UsuariosService) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('tipo');
  }
}