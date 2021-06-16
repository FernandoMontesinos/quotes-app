function obtenerFrases() {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    fetch(url)
    .then( resultado => resultado.json())
    .then( datos => {
        const containerInfoFrases = datos.data
        //console.log(containerInfoFrases);

        containerInfoFrases.forEach( datosFrase => {
            // console.log(datosFrase.quoteAuthor);
            // console.log(datosFrase.quoteGenre);
            // console.log(datosFrase.quoteText);
            document.getElementById('autor').textContent = datosFrase.quoteAuthor
            document.getElementById('genero').textContent = datosFrase.quoteGenre
            document.getElementById('frase').textContent = datosFrase.quoteText
        })
    })
}
obtenerFrases();