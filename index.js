
// Mi proyecto se trata de una Tienda Online de moda circular.

let productos //= parseInt(prompt ("¿A qué producto le darás una nueva vida? 1.Remera - 2.Pantalón - 3.Accesorios"))
const seguirComprando = true;
let totalCompra = 0; 
let decision;

// arreglo de productos
const productosArray = ["tresremeras", "blusablanca", "remeramarron", "remeradetirasblanca", "jeannegro", "jeanblanco", "pantalonrosa", "mochilaverde", "lentesnike" ]
console.log (productosArray)

// clase producto
class NuevoProducto{
  constructor(id,name,price,stock,size){
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.size = size;
  }
}
const tresremeras = new NuevoProducto(1,'3 Remeras',10000,3,"S y M");
productosArray.push(tresremeras);
const blusablanca = new NuevoProducto(2,'Blusa Blanca',3500,1,"M");
productosArray.push(blusablanca);
const remeramarron = new NuevoProducto(3,'Remera Marrón',6000,1,"M");
productosArray.push(remeramarron);
const remeradetirasblanca = new NuevoProducto(4,'Remera de tiras Blanca',6000,1,"S");
productosArray.push(remeradetirasblanca);
constjeannegro  = new NuevoProducto(5,'Jean Negro',15000,1,"28");
productosArray.push(jeannegro);
const jeanblanco = new NuevoProducto(6,'Jean Blanco',11000,1,"26");
productosArray.push(jeanblanco);
const pantalonrosa = new NuevoProducto(7,'Pantalón Rosa',12000,1,"28");
productosArray.push(pantalonrosa);
const mochilaverde = new NuevoProducto(8,'Mochila Verde Quechua',10000,1,"18 Lt");
productosArray.push(mochilaverde);
const lentesnike = new NuevoProducto(9,'Lentes Nike',12000,1,"talle único");
productosArray.push(lentesnike);

console.log(productosArray)

// manipulacion con DOM

const selectProd = document.getElementById('listaropa')

productosArray.forEach((elemento) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${elemento.name}: $${elemento.price}`
  optionProd.setAttribute('id', `${elemento.id}`)
  selectProd.append(optionProd)
})
// carrito
const carrito = []

const botonIngresar = document.getElementById('ingresarProd')
const finalizarCompra = document.getElementById('finalizar')

botonIngresar.onclick = () => {
  console.log(selectProd.selectedIndex)
  const indexProd = selectProd.selectedIndex
  const productoSeleccionado = productosArray[indexProd]
  console.log(productoSeleccionado)
  carrito.push(productoSeleccionado)
  localStorage.setItem('ProductoSeleccionado',JSON.stringify(selectProd))
}

finalizarCompra.onclick = () => {
  console.log(carrito)
  let total = 0
  carrito.forEach((prod) => {
    total = total + prod.price
  })
  alert(
    `Escogiste ${carrito.length} productos y el total de la compra es de ${total}`
  )
}

/*
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

*/

