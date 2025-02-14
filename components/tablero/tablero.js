import {todas_las_cartas} from"./data.js"

function item(contenedor){
    let div =document.createElement('div');
    div.className ="carta";

    let adl = document.createElement('div');
    adl.className = "front";
    adl.textContent = ""; 

    let back = document.createElement('div');
    back.className = "back";
    back.textContent = contenedor; 

    div.appendChild(adl);
    div.appendChild(back);

    div.addEventListener('click', () => {
        div.classList.toggle('flipped');
    });
   
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