// Elementos html
const cardContainer = document.querySelector(".cardPrincipal");

document.addEventListener('DOMContentLoaded', () => {
    obtenerFrases();
})

// Obtenemos los datos desde la api

const obtenerFrases = async () => {
   try{
       const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
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
        cardContainer.querySelector("#autor").textContent = quoteAuthor;
        cardContainer.querySelector("#genero").textContent = quoteGenre;
        cardContainer.querySelector("#frase").textContent = quoteText;
    })   

}