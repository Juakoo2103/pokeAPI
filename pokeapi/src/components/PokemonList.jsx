import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import PokeCard from "./PokeCard";

function PokemonList() {
  const { pokemonList } = useContext(PokemonContext);

  if (!pokemonList) {
    return <div>Processing...</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4 p-4  rounded-lg">
      {pokemonList.map((pokemon) => (
        <>
          <PokeCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
          />
        </>
      ))}

      <button>Soy el boton</button>
    </div>
  );
}

export default PokemonList;
