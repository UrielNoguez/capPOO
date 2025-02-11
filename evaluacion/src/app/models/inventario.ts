interface IInventario<T>{
    productos:T[];
}
/**
 * Implementa IInventario
 * Modela un inventario utilizando un arreglo de productos
 */
export class Inventario <T extends {nombreProducto:string,cantidadProducto:number,precio:number}> implements IInventario<T>{
    productos:T[];

    constructor(productos:T[]){
        this.productos=productos;
    }
}