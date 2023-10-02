// Elementos html
const templateCardContainer = document.querySelector('.templateCardContainer').content;
const containerCards = document.getElementById('containerFrase');
const containerNoQuotes = document.querySelector(".containerNoQuotes");

const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    obtenerFrasesAleatorias();
    //buscarFrases();
})

// Obtenemos los datos desde la api

const obtenerFrasesAleatorias = async () => {
   try{
       const url = 'https://quote-garden.onrender.com/api/v3/quotes/random?count=9';
       const res = await fetch(url);
       const datos = await res.json();
       const { data } = datos;
       //console.log(data);
       mostrarFrasesAleatorias(data);
   } catch(error) {
       console.error();
   }
}

const mostrarFrasesAleatorias = data => {
    data.forEach(frase => {
        const {quoteAuthor, quoteGenre, quoteText} = frase;
        templateCardContainer.getElementById("autor").textContent = quoteAuthor;
        templateCardContainer.getElementById("genero").textContent = quoteGenre;
        templateCardContainer.getElementById("frase").textContent = quoteText;
        const clone = templateCardContainer.cloneNode(true);
        fragment.appendChild(clone);
    })   
    containerCards.appendChild(fragment);
}


/* Buscador de Frases según autor o género */

const buscarFrases = async () => {

    let genreorautor = document.getElementById("buscador").value;

    try{
    const authorRes = `https://quote-garden.onrender.com/api/v3/quotes/random?count=9&author=${genreorautor}`;
    const genreRes = `https://quote-garden.onrender.com/api/v3/quotes/random?count=9&genre=${genreorautor}`;
    const respondeautor = await fetch(authorRes);
    const respondegenero = await fetch(genreRes);
    const authorData = (await respondeautor.json()).data;
    const genreData = (await respondegenero.json()).data;

    if (authorData.length > genreData.length) {
        //console.log(authorData);
        mostrarFrasesEncontradas(authorData);
        noQuotes(authorData)
    } else {
        //console.log(genreData);
        mostrarFrasesEncontradas(genreData);
        noQuotes(genreData);
    }
   } catch(error) {
       console.error();
   }
}

/* Motramos las frases encontradas */
const mostrarFrasesEncontradas = (authorData) => {
    containerNoQuotes.innerHTML = ``;
    containerCards.innerHTML = ``;
    authorData.forEach(frase => {
        const {quoteAuthor, quoteGenre, quoteText} = frase;
        templateCardContainer.getElementById("autor").textContent = quoteAuthor;
        templateCardContainer.getElementById("genero").textContent = quoteGenre;
        templateCardContainer.getElementById("frase").textContent = quoteText;
        const clone = templateCardContainer.cloneNode(true);
        fragment.appendChild(clone);
    });
    containerCards.appendChild(fragment);
}

const noQuotes = (authorData) => {
    if(authorData < 1) {
        containerNoQuotes.innerHTML= `<h1 class="anuncioNoDisponible">El Autor o Género que estás buscando no esta disponible :(</h1>`;   
    }
}



