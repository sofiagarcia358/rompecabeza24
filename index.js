import { cargarProgreso } from "./components/progreso/progreso.js";
import { cargarTablero } from "./components/tablero/tablero.js";
import { cargarFooter } from "./components/footer/footer.js";
import { cargarHeader } from "./components/header/header.js";

let DOM = document.querySelector("#root");

function cargarDom(){

let contenedor = document.createElement('div');
contenedor.className = "div-contenedor"


contenedor.appendChild(cargarHeader());

contenedor.appendChild(cargarProgreso());

contenedor.appendChild(cargarTablero()); 

contenedor.appendChild(cargarFooter());

return contenedor;

let todasLasCartasDom = document.querySelectorAll('.carta');
console.log(todasLasCartasDom);
todasLasCartasDom.forEach(cadaCarta => {

    cadaCarta.addEventListener("click",()=>{ 
        cadaCarta.classList.add("marcado");
    });
});
}


//al DOM, se le agrega la función cargarDom
DOM.appendChild(cargarDom());

