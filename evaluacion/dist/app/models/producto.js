"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
/**
 * Esta clase Implementa la interfaz IProducto
 */
class Producto {
    constructor(nombreProducto, cantidadProducto, precio) {
        this.nombreProducto = nombreProducto;
        this.cantidadProducto = cantidadProducto;
        this.precio = precio;
    }
}
exports.Producto = Producto;
