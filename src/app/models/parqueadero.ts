export class Parqueadero {

    constructor(idParqueadero = '', nombreP = '', direccion = '',correo = '',telefono = '', cupos = '' , precio = '') {
        this.idParqueadero = idParqueadero;
        this.nombreP = nombreP;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.cupos = cupos;
        this.precio = precio;

    }


    idParqueadero: string;
    nombreP: string;
    direccion: string;
    correo: string;
    telefono: string;
    cupos: string;
    precio: string;
    

}
