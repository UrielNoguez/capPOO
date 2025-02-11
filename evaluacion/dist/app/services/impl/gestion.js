"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionCrud = void 0;
/**
 * La siguiente clase se añadio porque permite las operaciones CRUD
 * Ademas de venta y consulta de inventario
 */
class GestionCrud {
    constructor(productos) {
        this.productos = productos;
    }
    agregarProducto(producto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado == -1) {
            this.productos.productos.push(producto);
        }
    }
    modificarProducto(producto, clavesProducto, valoresProducto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1 && (clavesProducto.length == valoresProducto.length)) {
            for (var i = 0; i < clavesProducto.length; i++) {
                if (clavesProducto[i] == "nombreProducto") {
                    this.productos.productos[productoEncontrado].nombreProducto = valoresProducto[i];
                }
                if (clavesProducto[i] == "cantidadProducto") {
                    this.productos.productos[productoEncontrado].cantidadProducto = Number(valoresProducto[i]);
                }
                if (clavesProducto[i] == "precio") {
                    this.productos.productos[productoEncontrado].precio = Number(valoresProducto[i]);
                }
            }
        }
    }
    buscarProducto(producto) {
        return this.productos.productos.findIndex((dato) => dato.nombreProducto === producto.nombreProducto);
    }
    buscarProductoNombre(nombreProducto) {
        return this.productos.productos.find((producto) => producto.nombreProducto === nombreProducto);
    }
    eliminarProducto(producto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1) {
            this.productos.productos.splice(productoEncontrado, 1);
        }
    }
    ventaProducto(producto, cantidad) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1) {
            this.modificarProducto(producto, ["cantidadProducto"], [String(producto.cantidadProducto - cantidad)]);
            return "Compra exitosa";
        }
        return "Objeto no encontrado";
    }
    consultarInventario() {
        return this.productos.productos;
    }
}
exports.GestionCrud = GestionCrud;
