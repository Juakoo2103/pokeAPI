import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export function PokemonContextProvider(props) {

  const [pokemon, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const listData = await listResponse.json();

      const pokemonPromises = listData.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });

      const pokemonData = await Promise.all(pokemonPromises);

      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };


  return (
    <PokemonContext.Provider
      value={{
        pokemon, pokemonList
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}
