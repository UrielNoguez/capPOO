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

    consultarInventario():T[]{
        return this.productos;
    }
}

/**
 * Describe el comportamiento de las operaciones a realizar
 */
export interface IGestionCrud<T>{
    agregarProducto(producto:T):void;
    modificarProducto(producto:T,clavesProducto:string[],valoresProducto:string[]):void;
    buscarProducto(producto:T):number;
    buscarProductoNombre(nombreProducto:string):T|undefined;
    eliminarProducto(producto:T):void;
    
}

/**
 * Implemta IGestionCrud
 * La siguiente clase se añadio porque permite las operaciones CRUD
 * Ademas de venta y consulta de inventario
 */
export class GestionCrud <T extends {nombreProducto:string,cantidadProducto:number,precio:number}> extends Inventario<T> implements IGestionCrud<T>{
    
    constructor(productos:T[]){
        super(productos);
    }
    agregarProducto(producto: T): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado==-1){
            this.productos.push(producto);
        }
    }
    modificarProducto(producto: T, clavesProducto: string[], valoresProducto: string[]): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1 && (clavesProducto.length==valoresProducto.length)){
            
            for(var i:number=0;i<clavesProducto.length;i++){
                
                if(clavesProducto[i]=="nombreProducto"){
                    this.productos[productoEncontrado].nombreProducto=valoresProducto[i];
                }
                if(clavesProducto[i]=="cantidadProducto"){
                    this.productos[productoEncontrado].cantidadProducto=Number(valoresProducto[i]);
                }
                if(clavesProducto[i]=="precio"){
                    this.productos[productoEncontrado].precio=Number(valoresProducto[i]);
                }
            }
        }
    }
    buscarProducto(producto: T): number {
        return this.productos.findIndex((dato:T)=>dato.nombreProducto===producto.nombreProducto);
    }
    buscarProductoNombre(nombreProducto: string): T | undefined {
        return this.productos.find((producto:T)=>producto.nombreProducto===nombreProducto);

    }
    eliminarProducto(producto: T): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1){
            this.productos.splice(productoEncontrado,1);
        }
    }
    ventaProducto(producto: T,cantidad:number): string {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1){
            this.modificarProducto(producto,["cantidadProducto"],[String(producto.cantidadProducto-cantidad)]);
            return "Compra exitosa";
        }
        return "Objeto no encontrado"
    }
    

}
/**
 * Esta clase fue añadida para separar métodos de GestionCrud
 * Especializando el metodo ventaProducto
 */
class VentaPapeleria<T extends {nombreProducto:string,cantidadProducto:number,precio:number}> extends GestionCrud<T>{
    constructor(productos:T[]){
        super(productos);
    }
    ventaProducto(producto: T,cantidad:number): string {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1){
            this.modificarProducto(producto,["cantidadProducto"],[String(producto.cantidadProducto-cantidad)]);
            return "Compra exitosa";
        }
        return "Objeto no encontrado"
    }

}

var producto1=new Producto("cuaderno",25,100);
var producto2=new Producto("pluma",25,100);
var producto3=new Producto("calculadora",25,100);

var operaciones=new VentaPapeleria([producto1,producto2,producto3]);
console.log(operaciones.consultarInventario())
operaciones.agregarProducto(new Producto("libro",23,12));
console.log(operaciones.consultarInventario())