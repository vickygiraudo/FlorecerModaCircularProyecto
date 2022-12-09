// Mi proyecto se trata de una Tienda Online de moda circular.

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
            text: "Agregado a tu carrito",
            imageUrl: "../img/carritodecompras.jpg",
            confirmButtonText: "Aceptar", 
            background: "#FDEBD0",
            icon: "success",
          }
            
            )
          agregarAlCarrito(e.target.id, data);
      })
  })
}
// -----
function agregarAlCarrito(id, data){
  console.log(data)
  console.log(id)

  const productoElegido = data.find( el => el.id === parseInt(id))
  //console.log(productoElegido)

  carrito.push(productoElegido);
  //guardar el carrito en localStorage.
}


const contenedorCarrito = document.querySelector(`.cardsElim`);
 
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener('click', ()=> {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML= "";
  carrito.forEach(producto => {
    const card = document.createElement('div')
    card.classList.add ("col-xl-3", "col-md-6", "col-xs-12")
    card.innerHTML =  `
       <div class = "card">
          <img src=" ${producto.img}" class= "card-img-top imgProductos" alt="${producto.name}">
          <div cls="card-body">
          <h3 class="card-title"> ${producto.name} </h3>
          <p class="card-text">$ ${producto.price} </p>
          <button id="eliminar${producto.id}" class="btn btnComprar colorBoton" > Eliminar del carrito </button>
          </div>
        </div>
      `
    contenedorCarrito.appendChild(card);

    //Eliminar productos del carrito
    const btnVaciar = document.getElementById(`eliminar${prod.id}`);
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
  })
}

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
 
const vaciarCarrito = document.querySelectorAll (`.btnVaciar`);
 
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
function actualizarCarrito() {
  let aux = '';
  carrito.forEach((prod) => {
    aux.innerHTML += `
    
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
  });

  contenedorCarrito.innerHTML = aux;
  calcularTotalCompra();
}
/*
//MOSTRAR CARRITO DE COMPRAS
 

 
verCarrito.addEventListener("click", (e) => {
  mostrarCarrito(e.target.id, data);
}  )
 
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
 
const vaciarCarrito = document.querySelectorAll (`.btnVaciar`);
 
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
const mostrarCategorias = async() => {
  const categoriasFetch = await fetch ("../categorias.json");
  const categoriasJson = await categoriasFetch.Json ();
  //console.log(categoriasJson)
  categoriasJson.forEach(cat =>{
    const option = document.createElement(`option`)
    option.innerText = `${cat}`
    lista.append(option)
  })
}

const buscarTodosProductos = async () =>{
  const productosFetch = await fetch ("../productos.json");
  const productosJson = await productosFetch.json ();
  console.log(productosJson)
}


 
productosJson.forEach (prod=> {
  const card = document.createElement("div");
  const { img, name, price, id} = prod
  divCards.innerHTML += `
    <div class = "card">
      <img src=" ${img}" class= "card-img-top imgProductos" alt="${name}">
      <div cls="card-body">
      <h3 class="card-title"> ${name} </h3>
      <p class="card-text">$ ${price} </p>
      <button class="btn colorBoton" id="boton${id}"> Agregar al carrito </button>
      </div>
    </div>
   `
})


const buscarProductosPorCategoria = async () => {
  divCards.innerHTML = ""
  const categoriaElegida = lista.value;
  //console.log (categoriaElegida)
  const productosFetch = await fetch ("../productos.json");
  const productosJson = await productosFetch.json ();
  //console.log(productosJson);
  const productosFiltrados = productosJson.filter(prod => prod.category===categoriaElegida)
  productosFiltrados.forEach (prod=> {
    const card = document.createElement("div");
    const { img, name, price, id} = prod
    divCards.innerHTML += `
      <div class = "card">
        <img src=" ${img}" class= "card-img-top imgProductos" alt="${name}">
        <div cls="card-body">
        <h3 class="card-title"> ${name} </h3>
        <p class="card-text">$ ${price} </p>
        <button class="btn colorBoton" id="boton${id}"> Agregar al carrito </button>
        </div>
      </div>
     `
  })
  

}


buscarTodosProductos ();
mostrarCategorias();
const botonFiltrar = [];
botonFiltrar.onclick = buscarProductosPorCategoria ()
*/

// Carrito de compras anterior al forEach 

/*
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
 
const tresRemeras = new NuevoProducto(1, '3 Remeras', 10000, "S y M", "../img/3RemerasMusculosas.jpeg", "Remeras",1)
const blusaBlanca = new NuevoProducto(2, 'Blusa Blanca', 3500, "M", "../img/blusablanca.png", "Remeras",1);
const remeraMarron = new NuevoProducto(3, 'Remera Marrón', 6000, "M", "../img/remeramarron.png", "Remeras",1);
const remeraDeTirasBlanca = new NuevoProducto(4, 'Remera de tiras Blanca', 6000, "S", "../img/musculosablanca.png", "Remeras",1);
const jeanNegro  = new NuevoProducto(5, 'Jean Negro', 15000, "28", "../img/jeannegro.png", "Pantalones",1);
const jeanBlanco = new NuevoProducto(6, 'Jean Blanco', 11000, "26", "../img/pantalonblanco.png", "Pantalones",1);
const pantalonRosa = new NuevoProducto(7, 'Pantalón Rosa', 12000, "28", "../img/pantalonrosa.png", "Pantalones",1);
const mochilaVerde = new NuevoProducto(8, 'Mochila Verde Quechua', 10000, "18 Lt", "../img/mochilaverde.png", "Accesorios",1);
const lentesNike = new NuevoProducto(9, 'Lentes Nike', 12000, "Talle único", "../img/lentesnike.png", "Accesorios",1);
 
// arreglo de productos
 
const productosArray = [tresRemeras, blusaBlanca, remeraMarron, remeraDeTirasBlanca, jeanNegro, jeanBlanco, pantalonRosa, mochilaVerde, lentesNike];
 
console.log(productosArray);
 
// manipulacion con DOM en el div contenedorProductos de la página productos de html
const contenedorProductos = document.getElementById("contenedorProductos");
 
//función para mostrar productos
 
 
productosArray.forEach(productosArray => {
  const card = document.createElement("div");
  card.classList.add ("col-xl-3", "col-md-6", "col-xs-12")
  card.innerHTML = `
    <div class = "card">
       <img src=" ${productosArray.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
      <div cls="card-body">
      <h3 class="card-title"> ${productosArray.name} </h3>
      <p class="card-text">$ ${productosArray.price} </p>
       <button class="btnComprar btn colorBoton" id="${productosArray.id}"> Agregar al carrito </button>
      </div>
    </div>
   `
    contenedorProductos.appendChild(card);
   
  //Agregar productos al carrito:
   
   
}
)
const boton = document.querySelectorAll(`.btnComprar`);
 
 
boton.forEach( btn =>{
  btn.addEventListener('click', (event) => {
    agregarAlCarrito(event.target.id, productosArray);
})
})
 
 

const buscarProductosPorCategoria =
// manipulacion con DOM en el div contenedorProductos de la página productos de html
const contenedorProductos = document.getElementById("contenedorProductos");
*/
 
/*
//función de agregar al carrito
 
const agregarAlCarrito = (id, arrayProductos) => {
  console.log(id);
  console.log(arrayProductos);
  const producto = productosArray.find((producto) => productosArray.id === id);
  const productoEnCarrito = carrito.find((producto) => productosArray.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
  }
  //mostrarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
 
//MOSTRAR CARRITO DE COMPRAS
 
const contenedorCarrito = document.getElementById("contenedorCarrito");
 
const verCarrito = document.getElementById("verCarrito");
 
verCarrito.addEventListener("click", () => {
  mostrarCarrito();
}  )
 
//Función para mostrar carrito
 
const mostrarCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach(producto => {
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

*/

