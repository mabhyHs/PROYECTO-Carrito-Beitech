/*VARIABLES*/
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

/*LISTENERS*/
function cargarEventListeners() {
  //cuando se agrega un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

/*FUNCIONES*/
function agregarCurso() {
  console.log("presionando en cursos");
}
