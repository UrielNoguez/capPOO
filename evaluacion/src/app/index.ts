import { Inventario } from "./models/inventario";
import { Producto } from "./models/producto";
import { GestionCrud } from "./services/impl/gestion";

var producto1=new Producto("cuaderno",25,100);
var producto2=new Producto("pluma",25,100);
var producto3=new Producto("calculadora",25,100);
var inventario=new Inventario([producto1,producto2,producto3]);
var operaciones=new GestionCrud(inventario);
console.log(operaciones.consultarInventario())
operaciones.agregarProducto(new Producto("libro",23,12));
console.log(operaciones.consultarInventario())