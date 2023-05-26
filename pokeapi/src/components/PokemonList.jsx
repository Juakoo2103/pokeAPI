import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import PokeCard from "./PokeCard";

function PokemonList() {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <div className="grid grid-cols-4 gap-4 m-4 p-4  rounded-lg">
      {console.log(pokemonList)}
    </div>
  );
}

export default PokemonList;
