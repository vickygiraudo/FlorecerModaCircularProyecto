
// Mi proyecto se trata de una Tienda Online de moda circular.

let productos = parseInt(prompt ("¿A qué producto le darás una nueva vida? 1.Remera - 2.Pantalón - 3.Accesorios"))
const seguirComprando = true;
let totalCompra = 0; 
let decision;

// arreglo de productos
const productosArray = ["remera", "pantalon", "accesorios"]
console.log (productosArray)

// clase producto
class NuevoProducto{
  constructor(id,name,price,stock,size){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.size = size;
  }
}
const remera = new NuevoProducto(1,'Remera',4000,10,"S");
productosArray.push(remera);
const pantalon = new NuevoProducto(2,'Pantalon',3500,3,"M");
productosArray.push(pantalon);
const accesorios = new NuevoProducto(3,'Accesorios',6000,20,"L");
productosArray.push(accesorios);

console.log(productosArray)


while (seguirComprando === true) {
    if(productos === 1){
        totalCompra = totalCompra + 4000
    }else if (productos === 2){
    totalCompra = totalCompra + 3500 
    }else if(productos === 3){
    totalCompra = totalCompra + 6000
    }

    decision = parseInt (prompt("¿Quiere seguir comprando? 1.Si 2.No"))
    if(decision===1){
    productos = parseInt (prompt ("¿Qué otro producto desea llevar? 1.Remera - 2.Pantalón - 3.Accesorios"))
    }else {
      seguirComprando = false
    }
    alert(`El total de su compra es ${totalCompra}. Gracias por darle una nueva oportunidad a esta prenda!`)
}

const totalCompraConDescuento = descuento(totalCompra)
function descuento(valor) {
    let descuento = 0
    if (valor <= 4000) {
      descuento = 10
    } else if (valor > 4000 && valor <= 6000) {
      descuento = 15
    } else {
      descuento = 20
    }
    return valorFinal
}

alert(`El total de tu compra con descuento es ${totalCompraConDescuento}`)
let valorDescuento = valor * (descuento / 100)
let valorFinal = valor - valorDescuento
