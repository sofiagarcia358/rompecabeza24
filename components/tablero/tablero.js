import {todas_las_cartas} from"./data.js"

function item(contenedor){
    let div =document.createElement('div');
    div.className ="carta";
    div.textContent= contenedor;
   
    return div;

}
function cargarCartas(){
    let div = document.createElement('div');
    div.className = "div-tableros1";

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
        
    });


    return div;
}
export{cargarCartas}