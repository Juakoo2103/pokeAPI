import logo from "../assets/logo.png";
import { PokemonContext } from "../context/PokemonContext";
import { useContext, useState } from "react";

function Navbar() {
  const { search, setSearch, buscaPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    const data = await buscaPokemon(search);
    setPokemon(data);
  };

  return (
    <>
      <nav className="grid grid-cols-3 p-4 bg-slate-400">
        <img src={logo} alt="PokeDex" className="w-1/3" />
        <input
          onChange={handleChange}
          placeholder="Busque un pokemon"
          className="h-fit"
        ></input>
        <button type="submit" onClick={handleClick}>
          Buscar
        </button>
      </nav>
      <div>
        {pokemon && (
          <div>
            <h1>{pokemon.name}</h1>
            <h3>{pokemon.weight}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
