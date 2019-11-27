import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';
import { Parqueadero } from 'src/app/models/parqueadero';
import Swal from "sweetalert2";

@Component({
  selector: 'app-registrar-parqueadero',
  templateUrl: './registrar-parqueadero.component.html',
  styleUrls: ['./registrar-parqueadero.component.css']
})
export class RegistrarParqueaderoComponent implements OnInit {

  public formRegistro: FormGroup;
  public formEdit: FormGroup;
  
  user = ''

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

    this.formEdit = this.formBuilder.group({
      idParqueadero: [],
      nombreP: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      cupos: ['', Validators.required],
      precio: ['', Validators.required],
      dueno: ['', Validators.required]
    });

    this.user = localStorage.getItem("username");

    this.getParqueaderos();

    

  }

  getParqueaderos() {
    this.service.getParqueaderos()
      .subscribe(data =>
        this.listParqueaderos = data);
  }

  registrarParqueadero(){
    this.formRegistro.value.dueno = this.user;
    this.service.createParquedero(this.formRegistro.value).subscribe(data => {
      console.log(data)
      this.getParqueaderos();
      this.formRegistro.reset();
    });
  }

  editar(p: Parqueadero){
    this.service.selectedParqueadero = p;
    this.formEdit.setValue(this.service.selectedParqueadero);
  }

  modificarParqueadero(){
    this.service.updateParqueadero(this.formEdit.value).subscribe(data => {
      Swal.fire(
        'Correcto!',
        'Parqueadero modificado correctamente',
        'success'
    )
      this.getParqueaderos();
      this.formEdit.reset();
    });
  }

}
