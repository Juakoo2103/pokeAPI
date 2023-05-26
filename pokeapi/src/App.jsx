import MostrarPokemon from "./components/MostrarPokemon"
import { useEffect, useState } from "react";
import { getAllPokemon , getPokemonById } from "./api/conexion.js";

function App() {

  const [pokemon, setPokemon] = useState([])

    useEffect(() => {
      getAllPokemon()
        .then((response) => {
          const pokemonList = response;
          console.log(pokemonList);
          
        })
        .catch((error) => console.error(error));
  
      getPokemonById(25)
        .then((response) => {
          const pokemon = response;
          console.log(pokemon);
        })
        .catch((error) => console.error(error));
    }, []);


  return (
    <>
    <MostrarPokemon/>
    </>
  )
}

export default App
