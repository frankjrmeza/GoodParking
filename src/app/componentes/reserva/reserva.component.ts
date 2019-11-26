import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';
import { Parqueadero } from 'src/app/models/parqueadero';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  public formReserva: FormGroup;

  showUser: boolean;
  showAdmin: boolean;

  listParqueaderos: Parqueadero[];

  placa = '';
  
  constructor(private service: ReservaService, private formBuilder: FormBuilder,private servicePar: ParqueaderoService) { }

  ngOnInit() {
    this.formReserva = this.formBuilder.group({
      nombreP: ['', Validators.required],
      tiempoReserva: ['', Validators.required]
    });
    let tipo = localStorage.getItem("tipo");

    if(tipo === 'Usuario'){
      this.showAdmin = false;
      this.showUser = true;
    }
    this.getParqueaderos();

  }

  getParqueaderos() {
    this.servicePar.getParqueaderos()
      .subscribe(data =>
        this.listParqueaderos = data);
  }

  Reservar(){
    this.formReserva.value.placaVehiculo = localStorage.getItem("placaPechera");
    this.service.createReserva(this.formReserva.value).subscribe(data => {
      console.log(data)
      this.formReserva.reset();
    });
  }

}
