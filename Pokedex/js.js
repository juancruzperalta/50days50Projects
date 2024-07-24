const pokemonContainer = document.querySelector("#pokemon-container");
const PokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=100";

function createPokemon() {
  fetch(`${PokeAPI}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      const pokemonPromises = json.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      Promise.all(pokemonPromises).then((pokemons) => {
        // Ordenar los Pokémon por ID
        pokemons.sort((a, b) => a.id - b.id);

        pokemons.forEach((details) => {
          const cardPokemon = document.createElement("div"),
            imagePokemon = document.createElement("img"),
            nmroPokemon = document.createElement("span"),
            infoPokemon = document.createElement("div"),
            namePokemon = document.createElement("span"),
            typePokemon = document.createElement("small");
          imagePokemon.src = `${details.sprites.front_default}`;
          nmroPokemon.textContent = `${details.id}`;
          namePokemon.textContent = `${details.name}`;
          typePokemon.textContent = `Type: ${details.types
            .map((typeInfo) => typeInfo.type.name)
            .join(", ")}`;

          cardPokemon.appendChild(imagePokemon);
          cardPokemon.classList.add("card-pokemon");
          imagePokemon.classList.add("image-pokemon");
          infoPokemon.classList.add("info-pokemon");
          nmroPokemon.classList.add("numero-pokemon");
          namePokemon.classList.add("name-pokemon");
          typePokemon.classList.add("type-pokemon");
          infoPokemon.appendChild(nmroPokemon);
          infoPokemon.appendChild(namePokemon);
          infoPokemon.appendChild(typePokemon);
          cardPokemon.appendChild(infoPokemon);
          pokemonContainer.appendChild(cardPokemon);
        });
      });
    })
    .catch((err) => console.log(err));
}
createPokemon();
