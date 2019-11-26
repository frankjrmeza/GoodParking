import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';
import { Parqueadero } from 'src/app/models/parqueadero';

@Component({
  selector: 'app-registrar-parqueadero',
  templateUrl: './registrar-parqueadero.component.html',
  styleUrls: ['./registrar-parqueadero.component.css']
})
export class RegistrarParqueaderoComponent implements OnInit {

  public formRegistro: FormGroup;
  
  showUser: boolean;
  showAdmin: boolean;

  listParqueaderos: Parqueadero[];

  constructor(private service: ParqueaderoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      nombreP: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      cupos: ['', Validators.required],
      precio: ['', Validators.required]
    });

    let tipo = localStorage.getItem("tipo");
    console.log(tipo)
    if(tipo === 'Administrador'){
      this.showAdmin = true;
      this.showUser = false;
    }

    this.getParqueaderos();

  }

  getParqueaderos() {
    this.service.getParqueaderos()
      .subscribe(data =>
        this.listParqueaderos = data);
  }

  registrarParqueadero(){
    this.service.createParquedero(this.formRegistro.value).subscribe(data => {
      console.log(data)
      this.getParqueaderos();
      this.formRegistro.reset();
    });
  }

}
