let carta_par_1 = ['🐯','🐮','🦋','🐷','🐥','🐶','🦦', '🦕'];
let carta_par_2 = ['🐯','🐮','🦋','🐷','🐥','🐶','🦦', '🦕'];
let todas_las_cartas = carta_par_1.concat(carta_par_2);

// Función para barajar las cartas de forma aleatoria
function barajarCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

todas_las_cartas = barajarCartas(todas_las_cartas);

// Crear un tablero y mostrar las cartas en pantalla
document.addEventListener("DOMContentLoaded", () => {
    const tablero = document.createElement("div");
    tablero.style.display = "grid";
    tablero.style.gridTemplateColumns = "repeat(4, 80px)";
    tablero.style.gap = "10px";
    document.body.appendChild(tablero);
    
    todas_las_cartas.forEach((carta, index) => {
        const cartaElemento = document.createElement("div");
        cartaElemento.textContent = carta;
        cartaElemento.style.width = "80px";
        cartaElemento.style.height = "80px";
        cartaElemento.style.display = "flex";
        cartaElemento.style.alignItems = "center";
        cartaElemento.style.justifyContent = "center";
        cartaElemento.style.border = "1px solid black";
        cartaElemento.style.fontSize = "2rem";
        cartaElemento.style.cursor = "pointer";
        
        cartaElemento.addEventListener("click", () => {
            cartaElemento.style.transform = "rotateY(180deg)";
            cartaElemento.style.transition = "transform 0.5s";
        });
        
        tablero.appendChild(cartaElemento);
    });
});

export { todas_las_cartas };

