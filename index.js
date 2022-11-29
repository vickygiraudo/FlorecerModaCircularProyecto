
// Mi proyecto se trata de una Tienda Online de moda circular.

let productos 
const seguirComprando = true;
let totalCompra = 0; 
let decision;

// clase producto
class NuevoProducto{
  constructor(id,name,price,stock,size,img){
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.size = size;
    this.img = img; 
    this.cantidad= 1;
  }
}
const tresRemeras = new NuevoProducto(1,'3 Remeras',10000,3,"S y M", "../img/3RemerasMusculosas.jpeg")
const blusaBlanca = new NuevoProducto(2,'Blusa Blanca',3500,1,"M", "../img/blusablanca.png");
const remeraMarron = new NuevoProducto(3,'Remera Marrón',6000,1,"M", "../img/remeramarron.png");
const remeraDeTirasBlanca = new NuevoProducto(4,'Remera de tiras Blanca',6000,1,"S", "../img/musculosablanca.png");
const jeanNegro  = new NuevoProducto(5,'Jean Negro',15000,1,"28", "../img/jeannegro.png");
const jeanBlanco = new NuevoProducto(6,'Jean Blanco',11000,1,"26", "../img/pantalonblanco.png");
const pantalonRosa = new NuevoProducto(7,'Pantalón Rosa',12000,1,"28", "../img/pantalonrosa.png");
const mochilaVerde = new NuevoProducto(8,'Mochila Verde Quechua',10000,1,"18 Lt", "../img/mochilaverde.png");
const lentesNike = new NuevoProducto(9,'Lentes Nike',12000,1,"Talle único", "../img/lentesnike.png");

// arreglo de productos

const productosArray = [tresRemeras, blusaBlanca, remeraMarron, remeraDeTirasBlanca, jeanNegro, jeanBlanco, pantalonRosa, mochilaVerde, lentesNike];
console.log(productosArray);

// creo el carrito array 
let carrito = [];
//si hay algo en el local storage se carga en el carrito
if (localStorage.getItem("carrito") ) {
  carrito = JSON.parse(localStorage.getItem ("carrito"));
}


// manipulacion con DOM en el div contenedorProductos de la página productos de html
const contenedorProductos = document.getElementById("contenedorProductos");

//función para mostrar productos 
const mostrarProductos = () => {
  productosArray.forEach((productosArray) => {
      const card = document.createElement("div");
      card.classList.add ("col-xl-3", "col-md-6", "col-xs-12") 
      card.innerHTML = `
        <div class = "card">
           <img src=" ${productosArray.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
           <div class="card-body"> 
           <h3 class="card-title"> ${productosArray.name} </h3>
           <p class="card-text">$ ${productosArray.price} </p>
           <button class="btn colorBoton" id="boton${productosArray.id}"> Agregar al carrito </button>
           </div>
        </div>
      `
      contenedorProductos.appendChild(card);

      //Agregar productos al carrito:
      const boton = document.getElementById (`boton ${productosArray.id}`);
      boton.addEventListener("click", () => {
        //agregarAlCarrito(productosArray.id)
      })
  }) 
  
}
//función de agregar al carrito

  const agregarAlCarrito = (id) =>{
    let producto = productosArray.find ((producto)= productosArray.id === id);
    const productoEnCarrito = carrito.find ((producto)=productosArray.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    }else {
       carrito.push(producto)
       //local storage 
       localStorage.setItem("carrito", JSON.stringify(carrito));
    } 
    calcularTotal();
  }

mostrarProductos();

//MOSTRAR CARRITO DE COMPRAS 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
}  )

//Función para mostrar carrito

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach((producto) => {
    const card = document.createElement("div");
      card.classList.add ("col-xl-3", "col-md-6", "col-xs-12") 
      card.innerHTML = `
        <div class = "card">
           <img src=" ${productosArray.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
           <div class="card-body"> 
           <h3 class="card-title"> ${productosArray.name} </h3>
           <p class="card-text">$ ${productosArray.price} </p>
           <p class="card-text">$ ${productosArray.cantidad} </p>
           <button class="btn colorBoton" id="eliminar${productosArray.id}"> Eliminar Producto </button>
           </div>
        </div>
      `
      contenedorCarrito.appendChild(card);


      //Eliminar productos del carrito
      const boton = document.getElementById(`eliminar${productosArray.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito (productosArray.id);
      })

  })
  calcularTotal();
} 

//Función que elimina el producto del carrito

const eliminarDelCarrito = (id) =>{
  const producto = carrito.find ((producto) = productosArray.id === id)
  const indice = carrito.indexOf (producto);
  carrito.splice (indice, 1);
  mostrarCarrito();
  //localstoage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion vaciar carrito

const vaciarCarrito = document.getElementById (vaciarCarrito);

vaciarCarrito.addEventListener ("click", () => {
   eliminarTodoElCarrito ();
})

//Función para eliminar todo el carrito

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito ();
  //localstorage
  localStorage.clear();
};

//mostrar el mensaje con el total de su compra
 const total = document.getElementById(total);

const calcularTotal = () => {
   let totalCompra = 0;
   carrito.forEach ((producto) => {
    totalCompra += productosArray.price
   })
  total.innerHTML = ` $${totalCompra}`
}




