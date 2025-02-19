function mezcla(todas_las_cartas) {
    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]]; // Intercambio de posiciones
    }
    return todas_las_cartas;
}


// Mezclar cartas
function mostrarCartas(todas_las_cartaslist){
    let guadarCartas = localStorage.getItem("Cartas");

    if (guadarCartas){return JSON.parse(guadarCartas);}
    else{
        let revolver = mezcla(todas_las_cartaslist);
        localStorage.setItem("Cartas",JSON.stringify(revolver));
        return revolver;
    }
}

export {mezcla, mostrarCartas};