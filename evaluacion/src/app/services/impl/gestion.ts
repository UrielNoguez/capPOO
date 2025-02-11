import { Inventario } from "../../models/inventario";
import { IGestionCrud } from "../IGestion";
/**
 * Implemta IGestionCrud
 * La siguiente clase se añadio porque permite las operaciones CRUD
 * Ademas de venta y consulta de inventario
 */
export class GestionCrud <T extends {nombreProducto:string,cantidadProducto:number,precio:number}> implements IGestionCrud<T>{
    productos:Inventario<T>;
    constructor(productos:Inventario<T>){
        this.productos=productos;
    }
    agregarProducto(producto: T): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado==-1){
            this.productos.productos.push(producto);
        }
    }
    modificarProducto(producto: T, clavesProducto: string[], valoresProducto: string[]): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1 && (clavesProducto.length==valoresProducto.length)){
            
            for(var i:number=0;i<clavesProducto.length;i++){
                
                if(clavesProducto[i]=="nombreProducto"){
                    this.productos.productos[productoEncontrado].nombreProducto=valoresProducto[i];
                }
                if(clavesProducto[i]=="cantidadProducto"){
                    this.productos.productos[productoEncontrado].cantidadProducto=Number(valoresProducto[i]);
                }
                if(clavesProducto[i]=="precio"){
                    this.productos.productos[productoEncontrado].precio=Number(valoresProducto[i]);
                }
            }
        }
    }
    buscarProducto(producto: T): number {
        return this.productos.productos.findIndex((dato:T)=>dato.nombreProducto===producto.nombreProducto);
    }
    buscarProductoNombre(nombreProducto: string): T | undefined {
        return this.productos.productos.find((producto:T)=>producto.nombreProducto===nombreProducto);

    }
    eliminarProducto(producto: T): void {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1){
            this.productos.productos.splice(productoEncontrado,1);
        }
    }
    ventaProducto(producto: T,cantidad:number): string {
        const productoEncontrado=this.buscarProducto(producto);
        if(productoEncontrado!=-1 && (producto.cantidadProducto>=cantidad)){
            this.modificarProducto(producto,["cantidadProducto"],[String(producto.cantidadProducto-cantidad)]);
            return "Compra exitosa";
        }
        return "Objeto no encontrado"
    }
    consultarInventario(): T[] {
        return this.productos.productos;
    }

}