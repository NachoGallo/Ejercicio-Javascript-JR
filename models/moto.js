'use strict'

const Vehiculo = require('./vehiculo');

class Moto extends Vehiculo{
    constructor(marca, modelo, precio, cilindradas){
        super(marca, modelo, precio);
        this.cilindradas = cilindradas;
    }

    //Metodos

    imprimirVehiculo(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.cilindradas} // Precio: $${this.precio}`);
    }
}
module.exports = Moto;