/**
 * Describe el comportamiento de las operaciones a realizar
 */
export interface IGestionCrud<T>{
    agregarProducto(producto:T):void;
    modificarProducto(producto:T,clavesProducto:string[],valoresProducto:string[]):void;
    buscarProducto(producto:T):number;
    buscarProductoNombre(nombreProducto:string):T|undefined;
    eliminarProducto(producto:T):void;
    ventaProducto(producto:T,cantidad:number):string;
    consultarInventario():T[];
}

