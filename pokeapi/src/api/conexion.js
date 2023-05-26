const BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemon = () => {
  return fetch(`${BASE_URL}/pokemon?limit=20`)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export const getPokemonById = (pokemonId) => {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
