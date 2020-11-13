//#region Ejercicio 1 y 2
/*Agregar ítem
Agrega un nuevo ítem al menú de
navegación desde Javascript.*/

//guardo el ul en un elemento
const navbar = document.getElementById("navbar");

//creo un nuevo "li" dentro de una variable nueva
const newItem = document.createElement("li");

//Acá le asigno un valor en texto "Item 5 Capos"
newItem.textContent = "item 5";

//acá le digo "a la lista, le sumás un hijo" y le paso el nuevo elemento como parámetro
navbar.appendChild(newItem);
//#endregion

//#region Ejercicio 3
/*Agregar negrita
Agrega una negrita a una sola
palabra dentro de tu párrafo.*/

//guardo el span "negrita" en una variable
const negrita = document.getElementById("negrita");

//accedo al style  de ese elemento, y dentro a su fontweight, y lo modifico
negrita.style.fontWeight = 600;

//le di border 0 porque en mi documento le di border a todo
negrita.style.border = 0;
//#endregion

//#region Ejercicio 4
/*Cambiar imagen
Luego de 10 segundos cambia la imagen.
Intercala entre al menos 2 imágenes diferentes.*/

//guardo la imagen "changingImg" en una variable
const changingImg = document.getElementById("changingImg");

//declaro la variable gatuna que es clave para cualquier tipo de trabajo con felinos
let gatiVariable = 0;

//creo una funcion cambia gatitos que segun mi variable gatuna cambie la src (source/fuente) de mi imagen y cambie la variable gatuna
function changeGatitos() {
  switch (gatiVariable) {
    case 0:
      changingImg.src = "img/gatito2.jpg";
      gatiVariable++;
      break;
    case 1:
      changingImg.src = "img/gatito1.jpg";
      gatiVariable++;
      break;
    case 2:
      changingImg.src = "img/gatito3.jpg";
      gatiVariable = 0;
      break;
    // default:
    // changingImg.src = "img/gatito1.jpg"; //le saque esto para que se quede en la imagen que este puesta
  }
}

//Llamo una funcion setInterval que llame a mi funcion cambia gatitos cada 1000 milisegundos
setInterval(changeGatitos, 1000);

//una funcion que cambia la gatiVariable para que el switch no tenga un caso posible y deje de cambiar
function stopChanging() {
  gatiVariable = 3;
}

//un listener que llama a la funcion para que pare de cambiar la imagen
changingImg.addEventListener("click", stopChanging);
//#endregion

//#region Ejercicio 5
/*Invertir el orden
Invierte el orden de estas dos
tarjetas. */

//guardo la tarjeta (img+nombre) de esteban en una variable
let perrito = document.getElementById("esteban");

//guardo mi boton que cambia las tarjetas de los perritos en una variable
let btnCambiaPerritos = document.getElementById("btnCambiaPerritos");

//creo un boolean que voy a usar en mi switch
let perriBoolean = true;

//aca creé un switch para cambiar entre las imagenes, creo que se puede hace con un if y es mas simple pero no me di cuenta en el momento
function changePerritos() {
  switch (perriBoolean) {
    //si el bool es true cambio la propiedad order en la tarjeta de esteban y el bool a false
    case true:
      perrito.style.order = -1;
      perriBoolean = false;
      break;

    //si el bool es false cambio la propiedad order en la tarjeta de esteban y el bool a true
    case false:
      perrito.style.order = 2;
      perriBoolean = true;
      break;
  }
}
/*
function changePerritos(callback) {
  callback();
}

function orden2() {
  perrito.style.order = -1;
  perriBoolean = false;
}

function orden1() {
  perrito.style.order = 2;
  perriBoolean = true;
}

if ((perriBoolean = true)) {
  changePerritos(orden1);
} else if ((perriBoolean = false)) {
  changePerritos(orden2);
}*/

//creo un listener que al hacer click en el boton cambie las tarjetas de lugar
btnCambiaPerritos.addEventListener("click", changePerritos);
//#endregion

//#region Ejercicio 6
/*Resalta el logo
Al pasar por encima del logo con el
mouse crea un borde con sobre él.
Añade una clase con el mouseover y
quitala con el mouseout. */

//todavia no se como hacerlo ontouch para mobile entonces esto no funciiona en consola

//guardo mi logo en una variable
let logo = document.getElementById("logo");

//creo una funcion que cambie el borde de mi logo a naranja
function handler1() {
  logo.style.borderColor = "orange";
}

//cre una funcion que cambie el color de mi logo a su color original
function handler2() {
  logo.style.borderColor = "black";
}

//creo un listener que cuando le haga mouse over (pasarle el mouse por encima) a mi logo va a llamar a mi funcion que lo cambia a naranja
logo.addEventListener("mouseover", handler1);

//creo un listener que cuando le haga mouse out (saque el mouse de encima) a mi logo va a llamar a mi funcion que lo cambia a negro
logo.addEventListener("mouseout", handler2);
//#endregion

//#region Ejercicio 7
/*Reemplazar el título 
Con el click en el título pide al usuario que ingrese un texto a través de prompt.
Reemplaza el título existente por el que ingresó el usuario.
Almacena el título ingresado en el local storage
Muestra siempre el último título ingresado (reinicia el navegador para probar) */

//guardo mi titulo en una variable
let titulo = document.getElementById("titulo");

//le creo un listener para que cuando hago click llame a changeTitle
titulo.addEventListener("click", changeTitle);

//creo mi funcion changeTitle
function changeTitle() {
  //usando localStorage.setItem("X", Y) le guardo un item con el nombre X y el valor Y a mi navegador.
  //mi Y en este caso es un prompt porque quiero guardarme lo que me ingresen
  localStorage.setItem("tituloGuardado", prompt("Ingrese nuevo titulo"));

  //cambio el texto de mi titulo con innerHTML y lo cambio a lo que tenga guardado en mi navegador con el nombre tituloGuardado
  titulo.innerHTML = localStorage.getItem("tituloGuardado");
}
titulo.innerHTML = localStorage.getItem("tituloGuardado");


//vuelvo a cambiar el texto de titulo para que cuando alguien reinicie mi sitio mi titulo cambie solo
let tituloGuardado = localStorage.getItem("tituloGuardado");

if (tituloGuardado != null) {
  titulo.innerHTML = "Heading";
} else if(tituloGuardado != null) {
  titulo.innerHTML = localStorage.getItem("tituloGuardado");
}
//#endregion


//#region Ejercicio 8
/*Duplica la fila de de 2 imágenes y 2
nombres con el click en ‘Ver más’.*/

