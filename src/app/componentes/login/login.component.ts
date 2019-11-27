import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/Models/usuarios';
import { Administradores } from 'src/app/models/administradores';
import { AdministradoresService } from 'src/app/services/administradores.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  listaUsuarios: Usuarios[];
  listaAdministradores: Administradores[];
  constructor(
    private router: Router,
    private loginservice: AuthenticationService,
    private formBuilder: FormBuilder,
    private service: UsuariosService,
    private serviceAdmin: AdministradoresService
  ) { }

  ngOnInit() {
    $('.nombre input').on('blur', function () {
      if ($(this).val() == "")
        $(this).addClass('focus');
    });
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      tipo: ['', Validators.required]
    });
    this.service.getUsuarios()
      .subscribe(data =>
        this.listaUsuarios = data
      );
    this.serviceAdmin.getAdministradores()
      .subscribe(data =>
        this.listaAdministradores = data
      );

    if (localStorage.getItem("username") !== null) {
      if (localStorage.getItem("tipo") === 'Usuario') {
        this.router.navigateByUrl('/reserva');
      } else {
        this.router.navigateByUrl('/registrarparqueadero');
      }

    }
  }

  checkLogin() {
      if (this.formLogin.value.username === '' || this.formLogin.value.password === '') {
        Swal.fire(
            'Error!',
            'Complete todos los campos',
            'error'
        )
    }else{
    if (this.formLogin.value.tipo === 'Usuario') {
      this.listaUsuarios.forEach(user => {
        if (this.formLogin.value.username === user.usuario && this.formLogin.value.password === user.contraseña) {

          localStorage.setItem('username', this.formLogin.value.username);
          localStorage.setItem('tipo', "Usuario");
          localStorage.setItem('placaPechera', user.placaVehiculo);
          window.location.reload();
        } else {
          return false;
        }
      });

    } else {
      this.listaAdministradores.forEach(user => {
        if (this.formLogin.value.username === user.usuario && this.formLogin.value.password === user.contraseña) {

          localStorage.setItem('username', this.formLogin.value.username);
          localStorage.setItem('tipo', "Administrador");
          window.location.reload();
        } else {
          return false;
        }
      });

    }
  }
  }

}
