
// Mi proyecto se trata de una Tienda Online de moda circular.

let productos = parseInt(prompt ("¿A qué producto le darás una nueva vida? 1.Remera - 2.Pantalón - 3.Accesorios"))
const seguirComprando = true;
let totalCompra = 0; 
let decision;

// arreglo de productos
const productosArray = ["tresremeras", "blusablanca", "remeramarron", "remeradetirasblanca", "jeannegro", "jeanblanco", "pantalonrosa", "mochilaverde", "lentesnike" ]
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
const tresremeras = new NuevoProducto(1,'3 Remeras',10000,3,"S y M");
productosArray.push(tresremera);
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



/*
let totalCompra = 0
document.addEventListener("DOMContentLoaded", () => {
    getCart()
    showProducts()
})
const PRODUCTOS = [],
    $productsSection = document.querySelector(".all-products"),
    $cartSection = document.querySelector(".cart"),
    $total = document.querySelector(".total"),
    $cartQuantity = document.querySelector(".cartQuantity")


class Zapatilla {
    constructor(id, marca, modelo, precio, cantidad, URL, inCart, inWishlist){
        this.id = id;
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.URL = URL;
        this.inCart = inCart;
        this.inWishlist = inWishlist;
    }
}

function showProducts(){
    const jordan = new Zapatilla(1, "Jordan", "Fly", 9999, 1, "img/jordan1.jpg")
    const nike = new Zapatilla(2, "Nike", "Air Max", 20000, 1, "img/nike1.jpg")
    const adidas = new Zapatilla(3, "Adidas", "Yeezy", 49999, 1, "img/adidas1.webp")
    const puma = new Zapatilla(4, "Puma", "Cave", 13000, 1, "img/puma1.jpg")
    PRODUCTOS.push(jordan)
    PRODUCTOS.push(nike)
    PRODUCTOS.push(adidas)
    PRODUCTOS.push(puma)
    PRODUCTOS.forEach(product => {
        $productsSection.innerHTML += `
        <div class="card">
                <div class="card-img">
                    <img src=${product.URL} alt="">
                </div>
                <div class="card-info">
                    <div class="name-container">
                        <span class="name">${product.marca} ${product.modelo}</span>
                    </div>
                    <div class="price-container">
                        <span class="price">$${product.precio}</span>
                    </div>
                </div>
                <div class="card-action">
                    <i id="${product.id}" onClick="addToCartArray(${product.id})" class="fa-solid fa-cart-plus addToCartBtn"></i>
                    <i id="${product.id}" class="fa-solid fa-heart-circle-plus addToWishBtn"></i>
                </div>
            </div>
        `
    })
}

const addToCartArray = (id) => {
    PRODUCTOS.forEach(product => {
        if(product.id === parseInt(id) && CARRITO.indexOf(product) === -1 && IDS.indexOf(product.id) === -1){
            CARRITO.push(product)
            IDS.push(product.id)
            updateCart()
            updateTotal()
        }
    })
    console.log(CARRITO);
}

const updateCart = () => {
    $cartSection.innerHTML = ""
    CARRITO.forEach(product => {
        $cartSection.innerHTML += `
        <div class="cardInCart">
            <div class="container-img">
                <img src=${product.URL} alt="">
            </div>
            <div class="info">
                <span class="nameInCart">${product.marca} ${product.modelo}</span>
                <span class="priceInCart">$${product.precio}</span>
                <input id="${product.id}" onClick="updateTotal(event)" type="number" min="1" max="5" value="${product.cantidad}" class="cart-quantity">
            </div>
                <i id="${product.id}" onClick="deleteProductFromCart(${product.id})" class="fa-solid fa-trash deleteBtn"></i>
            </div>
        `
    })
}

const deleteProductFromCart = id => {
    let index = IDS.indexOf(id)
    IDS.splice(index, 1)
    CARRITO.splice(index, 1)
    updateTotal()
    updateCart()
}

const updateTotal = e => {
    if(e){
        let id = parseInt(e.target.id),
            quantity = parseInt(e.target.value)
        CARRITO.forEach(product => {
            if (product.id === id) {
                product.cantidad = quantity 
            }else{
                e.target.value = quantity
            } 
                
        })
    }
    totalCompra = 0
    CARRITO.forEach(product => {
        totalCompra += product.precio * product.cantidad
    })
    $total.textContent = `Total: $${totalCompra}` 
    saveProductsAndPrice()
    $cartQuantity.textContent = CARRITO.length !== 0 ? CARRITO.map(producto => producto.cantidad).reduce((a, b) => a + b) : "0"
}

const saveProductsAndPrice = () => {
    localStorage.setItem("carrito", JSON.stringify(CARRITO))
    localStorage.setItem("total", JSON.stringify(totalCompra))
    localStorage.setItem("ids", JSON.stringify(IDS))
}

function getCart(){
    CARRITO = localStorage.getItem("carrito") === null ? CARRITO = [] : JSON.parse(localStorage.getItem("carrito"))
    IDS = localStorage.getItem("ids") === null ? IDS = [] : JSON.parse(localStorage.getItem("ids"))
    totalCompra = JSON.parse(localStorage.getItem("total"))
    updateCart()
    updateTotal()
    $cartQuantity.textContent = CARRITO.length !== 0 ? CARRITO.map(producto => producto.cantidad).reduce((a, b) => a + b) : "0"

}*/