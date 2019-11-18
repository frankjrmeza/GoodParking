import { Component, OnInit } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {
  public formRegistro: FormGroup;
  
  constructor(private service: AdministradoresService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  addAdmin() {
    this.service.createAdministrador(this.formRegistro.value).subscribe(data => {
      console.log('Registrado');
      // this.getPersonas();
      this.formRegistro.reset();
      this.router.navigate(['login']);
    },error => {
      console.log('Error');
    });
  }

}
