// Mi proyecto se trata de una Tienda Online de moda circular. Este js esta vinculado a productos.html 

//carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//contenedor productos
const divCards = document.querySelector(`.cards`)

fetch("../productos.json")
 .then(res => res.json())
 .then(data => cargarProductos(data));


function cargarProductos(data){
  data.forEach(prod => {
      const card = document.createElement('div')
      card.classList.add ("col-xl-3", "col-md-6", "col-xs-12")
      card.innerHTML =  `
         <div class = "card">
            <img src=" ${prod.img}" class= "card-img-top imgProductos" alt="${prod.name}">
            <div cls="card-body">
            <h3 class="card-title"> ${prod.name} </h3>
            <p class="card-text">$ ${prod.price} </p>
            <button id="boton${prod.id}" class="btn btnComprar colorBoton" > Agregar al carrito </button>
            </div>
          </div>
        `
      divCards.appendChild(card);
  })     

  let btnComprar = document.querySelectorAll('.btnComprar'); // NodeList = [button1 button2 button3]
  btnComprar.forEach(el =>{
      el.addEventListener('click', (e) => {
          Swal.fire({
            text: "Agregado a tu carrito!",
            imageUrl: "../img/carritodecompras-removebg-preview.png",
            confirmButtonText: "Aceptar", 
            background: "#FDEBD0",
          }
            
            )
          agregarAlCarrito(e.target.id, data);
      })
  })
}

// Función agregar al carrito 

function agregarAlCarrito(id, data){
  console.log(data)
  console.log(id)

  const productoElegido = data.find( el => el.id === parseInt(id))
  console.log(productoElegido);

  carrito.push(productoElegido);
  
}

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener('click', ()=> {
  mostrarCarrito();
});

//Función para mostrar carrito

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add ("col-xl-3", "col-md-6", "col-xs-12")
    card.innerHTML = `
        <div class = "card">
           <img src=" ${producto.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
           <div class="card-body">
           <h3 class="card-title"> ${producto.name} </h3>
           <p class="card-text">$ ${producto.price} </p>
           <p class="card-text">$ ${producto.cantidad} </p>
           <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
           </div>
        </div>
      `
      contenedorCarrito.appendChild(card);
 
 
      //Eliminar productos del carrito
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito (producto.id);
      })
 
  })
  calcularTotal();
}
 //Eliminar productos del carrito

const btnVaciar = document.getElementById(`eliminar${producto.id}`);
botonElim.addEventListener("click", (e) => {
  eliminarDelCarrito(e.traget.prod.id);
 Swal.fire({
     text: "¿Seguro quiere eliminar este producto?",
     confirmButtonText: "Si", 
    showCancelButton: true,
    cancelButtonText: "Cancelar",
     background: "#FDEBD0",
    })
})



//Función que elimina el producto del carrito
 
const eliminarDelCarrito = (id) =>{
  const prod = carrito.find ((prod) = prod.id === id)
  const indice = carrito.indexOf (prod);
  carrito.splice (indice, 1);
  mostrarCarrito();
  //localstoage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion vaciar carrito
 
const vaciarCarrito = document.getElementById ("vaciarCarrito");
 
vaciarCarrito.addEventListener ("click", (e) => {
   eliminarTodoElCarrito (e.target.id, data);
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


/*
// Carrito de compras anterior al forEach 


// clase producto
class NuevoProducto{
  constructor(id,name,price,size,img,category, cantidad){
    this.id = id;
    this.name = name;
    this.price = price;
    this.size = size;
    this.img = img;
    this.category = category;
    this.cantidad = cantidad;
  }
}
 

 
// arreglo de productos
 
const productosArray = [tresRemeras, blusaBlanca, remeraMarron, remeraDeTirasBlanca, jeanNegro, jeanBlanco, pantalonRosa, mochilaVerde, lentesNike];
 
console.log(productosArray);
 
// manipulacion con DOM en el div contenedorProductos de la página productos de html
const contenedorProductos = document.getElementById("contenedorProductos");
 
//función para mostrar productos
 
//Otro metodo que encontre pero no funcionó 

const contenedorCarrito = document.querySelector(`.cardsElim`);
const renderCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((item)=>{
    let div = document.createElement("div")
    div.innerHTML=  `
     <div class = "card">
        <img src=" ${item.img}" class= "card-img-top imgProductos" alt="${item.name}">
        <div cls="card-body">
        <h3 class="card-title"> ${item.name} </h3>
        <p class="card-text">$ ${item.price} </p>
        <button onclick="eliminarItem(${item.id}) "  > Eliminar del Carrito </button>
        </div>
      </div>
    `
    contenedorCarrito.append(div)
  })
}
 
const eliminarItem = (id) =>{
  let borrar = carrito.find((producto)=> producto.id === id)
  let indice = carrito.indexOf(borrar)
  carrito.splice(indice, 1)
  renderCarrito();
  calcularTotal();
}
 
const divPrecio = document.querySelector("#precioTotal")
calcularTotal = () => {
  let cont = 0;
  carrito.forEach((pre) =>{
    cont += pre.precio
  })
 
  divPrecio.innerHTML = cont
}

 
*/
