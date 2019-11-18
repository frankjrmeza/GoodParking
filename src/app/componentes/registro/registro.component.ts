import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public formRegistro: FormGroup;
  
  constructor(private service: UsuariosService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      placaVehiculo: ['', Validators.required],
      tipoVehiculo: ['', Validators.required]
    });
  }

  addUsuario() {
    this.service.createUsuario(this.formRegistro.value).subscribe(data => {
      console.log('Registrado');
      // this.getPersonas();
      this.formRegistro.reset();
      this.router.navigate(['login']);
    },error => {
      console.log('Error');
    });
  }
 
}
