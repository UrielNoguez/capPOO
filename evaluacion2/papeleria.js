"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionCrud = exports.Inventario = exports.Producto = void 0;
/**
 * Esta clase Implementa la interfaz IProducto
 * Permite modelar un producto
 */
class Producto {
    constructor(nombreProducto, cantidadProducto, precio) {
        this.nombreProducto = nombreProducto;
        this.cantidadProducto = cantidadProducto;
        this.precio = precio;
    }
}
exports.Producto = Producto;
/**
 * Implementa IInventario
 * Modela un inventario utilizando un arreglo de productos
 */
class Inventario {
    constructor(productos) {
        this.productos = productos;
    }
    consultarInventario() {
        return this.productos;
    }
}
exports.Inventario = Inventario;
/**
 * Implemta IGestionCrud
 * La siguiente clase se añadio porque permite las operaciones CRUD
 * Ademas de venta y consulta de inventario
 */
class GestionCrud extends Inventario {
    constructor(productos) {
        super(productos);
    }
    agregarProducto(producto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado == -1) {
            this.productos.push(producto);
        }
    }
    modificarProducto(producto, clavesProducto, valoresProducto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1 && (clavesProducto.length == valoresProducto.length)) {
            for (var i = 0; i < clavesProducto.length; i++) {
                if (clavesProducto[i] == "nombreProducto") {
                    this.productos[productoEncontrado].nombreProducto = valoresProducto[i];
                }
                if (clavesProducto[i] == "cantidadProducto") {
                    this.productos[productoEncontrado].cantidadProducto = Number(valoresProducto[i]);
                }
                if (clavesProducto[i] == "precio") {
                    this.productos[productoEncontrado].precio = Number(valoresProducto[i]);
                }
            }
        }
    }
    buscarProducto(producto) {
        return this.productos.findIndex((dato) => dato.nombreProducto === producto.nombreProducto);
    }
    buscarProductoNombre(nombreProducto) {
        return this.productos.find((producto) => producto.nombreProducto === nombreProducto);
    }
    eliminarProducto(producto) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1) {
            this.productos.splice(productoEncontrado, 1);
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
}
exports.GestionCrud = GestionCrud;
/**
 * Esta clase fue añadida para separar métodos de GestionCrud
 * Especializando el metodo ventaProducto
 */
class VentaPapeleria extends GestionCrud {
    constructor(productos) {
        super(productos);
    }
    ventaProducto(producto, cantidad) {
        const productoEncontrado = this.buscarProducto(producto);
        if (productoEncontrado != -1) {
            this.modificarProducto(producto, ["cantidadProducto"], [String(producto.cantidadProducto - cantidad)]);
            return "Compra exitosa";
        }
        return "Objeto no encontrado";
    }
}
var producto1 = new Producto("cuaderno", 25, 100);
var producto2 = new Producto("pluma", 25, 100);
var producto3 = new Producto("calculadora", 25, 100);
var operaciones = new VentaPapeleria([producto1, producto2, producto3]);
console.log(operaciones.consultarInventario());
operaciones.agregarProducto(new Producto("libro", 23, 12));
console.log(operaciones.consultarInventario());
