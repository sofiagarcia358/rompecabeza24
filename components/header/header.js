let listaNumeros = ['1', '2', '3', '4', '5'];

function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuYqxELknDKVAm00D03QXzizStjiij3huqQ&s";
    logo.alt = "logo";
    header.appendChild(logo);

    let texto = document.createElement('h1');
    texto.textContent = "Frutas";
    header.appendChild(texto);

  

    return header;

}

export{ header }