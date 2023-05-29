import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export function PokemonContextProvider(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  

  const buscaPokemon = async (search) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const listResponse = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const listData = await listResponse.json();

      const pokemonPromises = listData.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });

      const pokemonData = await Promise.all(pokemonPromises);

      setPokemonList(pokemonData);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        search,
        buscaPokemon,
        setSearch,
        pokemonList,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}
