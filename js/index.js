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
        
        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${img} " class="card-img-top" alt="...">
            <a href="#" class="menu">
            <div class="card-body">
                <h4 class="cardTitle">${id}.${title}</h4>
                <h5 class="cardDirector">Director : ${director} </h5>
                <h5 class="cardGener">Genero : ${genre} </h5>
                <h5 class="cardAge">Año : ${year} </h5>
                <h5 class="cardDescription">Sinopsis : ${description} </h5>
            </div>
        </div>
` 
    };
})