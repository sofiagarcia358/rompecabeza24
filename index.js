import { cargarCartas } from "./components/tablero/tablero.js";

let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "div-contenedor"


let divHeader = document.createElement('div');
divHeader.className = "div-header"
contenedor.appendChild(divHeader);

let divProgreso = document.createElement('div');
divProgreso.className = "div-progreso"
contenedor.appendChild(divProgreso);

let divTablero = document.createElement('div');
divTablero.className = "div-tablero"
divTablero.appendChild(cargarCartas());
contenedor.appendChild(divTablero); 


let divFooter = document.createElement('div');
divFooter.className = "div-footer"
contenedor.appendChild(divFooter);




DOM.appendChild(contenedor);