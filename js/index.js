const requestURL ='../json/pelis.json';


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies =>{
    for (let index = 0; index < movies.pelis.length ; index++)
    {
        const moviesSection = document.
        getElementById('movieSection');

        let id = (movies.pelis[index].id);
        let img  = (movies.pelis[index].caratula)
        let title = (movies.pelis[index].titulo)
        let year = (movies.pelis[index].año) 
        let description = (movies.pelis[index].descripcion)
        let genre  = (movies.pelis[index].genero)
        let director = (movies.pelis[index].director)
        
        /* console.log (movies.pelis[index].titulo); */

        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${img} " class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${id}.${title}</h3>
                <h5 class="card-title">Director : ${director} </h5>
                <h5 class="card-title">Genero : ${genre} </h5>
                <h5 class="card-title">Año : ${year} </h5>
                <h5 class="card-title">Sinopsis : ${description} </h5>
                <h3 class="card-title">${title} </h3>
            </div>
        </div>
` 
    };
})