function obtenerFrases() {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes'
    fetch(url)
    .then( resultado => resultado.json())
    .then( datos => {
        const containerInfoFrases = datos.data
        console.log(containerInfoFrases);

        containerInfoFrases.forEach( datosFrase => {
            const { quoteAuthor, quoteGenre, quoteText} = datosFrase;
            
            const autor = document.createElement('H1');
            autor.textContent = `Autor: ${quoteAuthor}`;
            autor.classList.add('author');

            const genero  = document.createElement('H2');
            genero.textContent = quoteGenre;
            genero.classList.add('gener');

            const frase = document.createElement('H3');
            frase.textContent = quoteText;
            frase.classList.add('frase');

            // const contenedor = document.querySelector('.container');
            const fraseDiv = document.createElement('DIV');
            fraseDiv.classList.add('card-Principal');

            fraseDiv.appendChild(autor);
            fraseDiv.appendChild(genero);
            fraseDiv.appendChild(frase);

            const contenedorFrases = document.querySelector('.container');
            contenedorFrases.appendChild(fraseDiv);
            

           
        })
    })
}
obtenerFrases();