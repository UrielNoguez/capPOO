"use strict";
// Clase abstracta para un avión
class Avion {
    constructor(modelo) {
        this.modelo = modelo;
    }
    fly() {
    }
    ;
}
// Clase para un simulador de vuelo
class AvionSimulador extends Avion {
    constructor(modelo, velocidad, altitud) {
        super(modelo);
        this.velocidad = velocidad;
        this.altitud = altitud;
    }
    mostrarInformacion() {
        console.log(`Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h, Altitud: ${this.altitud} metros.`);
    }
}
// Clase para una aplicación de reserva de vuelos
class AvionReserva extends Avion {
    constructor(modelo, asientos) {
        super(modelo);
        this.asientos = asientos;
    }
    mostrarInformacion() {
        console.log(`Modelo: ${this.modelo}, Asientos disponibles: ${this.asientos.join(", ")}.`);
    }
}
// Ejemplo de uso
const avionSimulador = new AvionSimulador("Boeing 737", 800, 10000);
const avionReserva = new AvionReserva("Airbus A320", ["1A", "1B", "2A", "2B"]);
avionSimulador.mostrarInformacion(); // Salida: Modelo: Boeing 737, Velocidad: 800 km/h, Altitud: 10000 metros.
avionReserva.mostrarInformacion(); // Salida: Modelo: Airbus A320, Asientos disponibles: 1A, 1B, 2A, 2B.
