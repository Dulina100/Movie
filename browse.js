let apikey = "f56e9cff";

let movieContainer = document.getElementById("movie_container");

let movies = [
    "batman",
    "avengers",
    "joker",
    "interstellar",
    "superman",
    "spiderman 2",
    "ghost rider",
    "transformers"
];

async function loadMovies() {

    for(let movie of movies){

        let response = await fetch(
            `https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`
        );

        let data = await response.json();

        createMovieCard(data);

    }

}

function createMovieCard(movie){

    let div = document.createElement("div");

    div.className = "movie_card";

    div.innerHTML = `
    
        <img src="${movie.Poster}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>

    `;

    movieContainer.appendChild(div);

}

loadMovies();