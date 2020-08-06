'use strict'

const Moto = require('./models/moto');
const Auto = require('./models/auto');

var vehiculos = new Array();
vehiculos = cargarVehiculos();

mostrarVehiculos(vehiculos);
imprimirCaroBaratoLetra(vehiculos);
imprimirMayorAMenor(vehiculos);


/**********************************************************************/ 
//Definición de funciones.

function cargarVehiculos(){
    //El hardcodeo cósmico ha comenzado...
    var motoUno = new Moto("Honda", "Titan", "60.000,00", "125c");
    var motoDos = new Moto("Yamaha", "YBR", "80.500,50", "160c");

    var autoUno = new Auto("Peugeot", "206", "200.000,00", "4");
    var autoDos = new Auto("Peugeot", "208", "250.000,00", "5");

    var arrayVehiculos = [motoUno,motoDos,autoUno,autoDos];

    return arrayVehiculos;
    
}

function mostrarVehiculos(vehiculos){
    vehiculos.forEach((vehiculo) => vehiculo.imprimirVehiculo());
    console.log("=============================");
}

function imprimirCaroBaratoLetra(arrayVehiculos){
    arrayVehiculos.sort((a, b) => a.precio - b.precio);
    var vehiculoMasBarato = arrayVehiculos[0];
    var vehiculoMasCaro = arrayVehiculos[arrayVehiculos.length-1];

    console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);
    console.log(`Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`);

    for(var vehiculo in arrayVehiculos){
        var marca = arrayVehiculos[vehiculo].marca;
        if(marca.includes('Y')){
            console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + arrayVehiculos[vehiculo].marca + " " + arrayVehiculos[vehiculo].modelo + " $" + arrayVehiculos[vehiculo].precio);
        }
    }

    console.log("=============================");
}

function imprimirMayorAMenor(arrayVehiculos){
    arrayVehiculos.sort((a, b) => a.precio - b.precio);
    var arrayMayMen = arrayVehiculos.reverse();

    console.log("Vehículos ordenados por precio de mayor a menor:");
    arrayMayMen.forEach((vehiculo) => vehiculo.imprimirVehiculo());
}

function agregarVehiculo(arrayVehiculos, nuevoVehiculo){
    /*
    *Con esta función se puede agregar un vehiculo nuevo al array de vehiculos.
    *Recibe por parametro el array de vehiculos y el nuevo objeto vehiculo que se desea agregar.
    *Devuelve el array actualizado.
    */
    arrayVehiculos.push(nuevoVehiculo);
    return arrayVehiculos;
}