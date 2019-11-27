import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';
import { Parqueadero } from 'src/app/models/parqueadero';

import Swal from "sweetalert2";

@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {


    
    f = new Date();

    public formReserva: FormGroup;

    showUser: boolean;
    showAdmin: boolean;

    listParqueaderos: Parqueadero[];

    placa = '';

    constructor(private service: ReservaService, private formBuilder: FormBuilder, private servicePar: ParqueaderoService) { }

    ngOnInit() {
        this.formReserva = this.formBuilder.group({
            nombreP: ['', Validators.required],
            tiempoReserva: ['', Validators.required]
        });

        this.getParqueaderos();

    }

    getParqueaderos() {
        this.servicePar.getParqueaderos()
            .subscribe(data =>
                this.listParqueaderos = data);
    }


    Reservar() {
        this.formReserva.value.placaVehiculo = localStorage.getItem("placaPechera");
        if (this.formReserva.value.nombreP === '' || this.formReserva.value.tiempoReserva === '') {
            Swal.fire(
                'Error!',
                'Complete todos los campos',
                'error'
            )
        } else {
            this.servicePar.getParqueadero(this.formReserva.value.nombreP).subscribe(res => {
                console.log(res)
                if (res.cupos === '0') {
                    Swal.fire(
                        'Error!',
                        'No hay cupos disponibles',
                        'error'
                    )
                } else {
                    this.service.createReserva(this.formReserva.value).subscribe(data => {


                        this.servicePar.selectedParqueadero = res;
                        this.servicePar.selectedParqueadero.cupos = (parseInt(res.cupos) - 1).toString();
                        console.log(this.servicePar.selectedParqueadero)
                        this.servicePar.updateParqueadero(this.servicePar.selectedParqueadero).subscribe(res => {
                            Swal.fire(
                                'Correcto!',
                                'Cupo reservado correctamente',
                                'success'
                            )
                            this.formReserva.reset();
                            this.getParqueaderos();
                        });

                    });

                }

            });


        }
    }

}
