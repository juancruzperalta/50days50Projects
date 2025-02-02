const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const $main = document.querySelector("#main");
const $search = document.getElementById("search");
const $form = document.querySelector("form");

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  $main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const $divNew = document.createElement("div");
    $divNew.classList.add("movie");

    $divNew.innerHTML = `
    <img class="movieImg"  src="${IMG_PATH + poster_path}"> 
    <div class="movie-info">
    <h3>${title}</h3>
    
    <span class="${getBoundingCliente(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>OverView</h3>
    ${overview}
    </div>
    `;

    $main.appendChild($divNew);
  });
}

function getBoundingCliente(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = $search.value;
  if (search !== "") {
    getMovies(SEARCH_API + search);
    search.value = "";
  } else {
    window.location.reaload();
  }
});
