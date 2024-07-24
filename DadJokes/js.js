const $btnJokes = document.querySelector(".btnJokes");
const $textJokes = document.querySelector(".textDadJokes");

$btnJokes.addEventListener("click", generarJoke);
generarJoke();

async function generarJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  $textJokes.innerHTML = data.joke;
}
