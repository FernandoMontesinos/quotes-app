// Elementos html
const templateCardContainer = document.querySelector('.templateCardContainer').content;
const containerCards = document.getElementById('containerFrase');

const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    obtenerFrases();
})

// Obtenemos los datos desde la api

const obtenerFrases = async () => {
   try{
       const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random?count=9';
       const res = await fetch(url);
       const datos = await res.json();
       const { data } = datos;
       console.log(data);
       mostrarFrase(data);
   } catch(error) {
       console.error();
   }
}

const mostrarFrase = data => {
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

