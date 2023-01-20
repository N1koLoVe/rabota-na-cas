const pokemonListEl = document.querySelector(".pokemon-list");
const pokemonCardEl = document.querySelector(".pokemon-card");

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

function renderPokemonList(listElement, pokemonData) {
  for (let el of pokemonData) {
    const newLi = document.createElement("LI");
    newLi.textContent = el.name;
    listElement.appendChild(newLi);
    newLi.addEventListener("click", function () {
      fetchPokemonByUrl(el.url);
    });
  }
}

function renderPokemonDetails(cardElement, pokemonDetailsData) {
  cardElement.innerHTML = ` <h3>${pokemonDetailsData.name}</h3>
    <img src="${pokemonDetailsData.sprites.front_default}" alt="image of a pokemon">`;
}

function fetchPokemons() {
  console.log("before fetch");
  fetch(POKEMON_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.results);
      renderPokemonList(pokemonListEl, data.results);
    });
  console.log("after fetch");
}

function fetchPokemonByUrl(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderPokemonDetails(pokemonCardEl, data);
    });
}

fetchPokemons();
