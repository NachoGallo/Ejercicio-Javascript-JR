'use strict'

const Vehiculo = require('./vehiculo');

class Auto extends Vehiculo{
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    //Metodos

    imprimirVehiculo(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`);
    }
}
module.exports = Auto;