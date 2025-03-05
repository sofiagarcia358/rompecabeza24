import { todas_las_cartas } from "./data.js";
import { cartaTablero} from "./itemCarta.js";
import { mezcla } from "./funcionesCartas.js";
import { mostrarCartas } from "./funcionesCartas.js";


function cargarTablero(){
    let divTablero = document.createElement('div');
    divTablero.className = "div-tablero"

    let cartasObtenidas = mostrarCartas(todas_las_cartas);
    let cartasMezcladas = mezcla(cartasObtenidas);
    divTablero.appendChild(cartaTablero(cartasMezcladas, cartasMezcladas));

    return divTablero;
}

export{cargarTablero}