import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';


const ButtonNext = ({ currentIndex, PokemonList, handleNext }) => {
  return (
    <button onClick={handleNext} disabled={currentIndex === PokemonList.length - 1}>
      Siguiente
    </button>
  );
};

const ButtonPrevious = ({ currentIndex, handlePrevious }) => {
  return (
    <button onClick={handlePrevious} disabled={currentIndex === 0}>
      Anterior
    </button>
  );
};

const Buttons = () => {

  const {pokemonList} = useContext(PokemonContext)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonList, setPokemonList] = useState([...]); // La lista de datos que deseas recorrer

  const handleNext = () => {
    if (currentIndex < PokemonList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <ButtonPrevious currentIndex={currentIndex} handlePrevious={handlePrevious} />
      <ButtonNext currentIndex={currentIndex} PokemonList={PokemonList} handleNext={handleNext} />
      <div>{PokemonList[currentIndex]}</div>
    </div>
  );
};

export default Buttons;
