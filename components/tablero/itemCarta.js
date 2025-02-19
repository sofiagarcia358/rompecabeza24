function cartaTablero(contenido, todas_las_cartas){
function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta";

    let adelante = document.createElement('div');
    adelante.className = "frente";
    adelante.textContent = ""; 

    let back = document.createElement('div');
    back.className = "atras";
    back.textContent = contenido; 

    div.appendChild(adelante);
    div.appendChild(back);

    div.addEventListener('click', () => {
        div.classList.toggle('flipped');
    });

    return div;
}
function cargarCartas(todas_las_cartas){
    let div = document.createElement('div');
    div.className = "div-tableros1";

    todas_las_cartas.forEach((letra) => {
            div.appendChild(item(letra));
        });

    return div;
}
return cargarCartas(todas_las_cartas);
}
export {cartaTablero}