export class Reserva{

    constructor(id = '', nombreP = '', placaVehiculo = '', tiempoReserva = '') {
        this.id = id;
        this.nombreP = nombreP;
        this.placaVehiculo = placaVehiculo;
        this.tiempoReserva = tiempoReserva;
    }


    id: string;
    nombreP: string;
    placaVehiculo: string;
    tiempoReserva: string;

}