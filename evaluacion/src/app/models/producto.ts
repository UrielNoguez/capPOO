/**
 * Describe como es un producto
 */
interface IProducto{
    nombreProducto:string;
    cantidadProducto:number;
    precio:number;
}
/**
 * Esta clase Implementa la interfaz IProducto
 * Permite modelar un producto
 */
export class Producto implements IProducto{
    nombreProducto:string;
    cantidadProducto:number;
    precio:number;
    constructor(nombreProducto:string,cantidadProducto:number,precio:number){
        this.nombreProducto=nombreProducto;
        this.cantidadProducto=cantidadProducto;
        this.precio=precio;
    }
}