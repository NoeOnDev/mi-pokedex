import { createContext, useState, useContext } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [pokemonToCompare, setPokemonToCompare] = useState([]);

  const addPokemonToCompare = (pokemon) => {
    if (pokemonToCompare.length < 2) {
      if (!pokemonToCompare.some((p) => p.id === pokemon.id)) {
        setPokemonToCompare([...pokemonToCompare, pokemon]);
        return true;
      }
    }
    return false;
  };

  const removePokemonFromCompare = (pokemonId) => {
    setPokemonToCompare(pokemonToCompare.filter((p) => p.id !== pokemonId));
  };

  const clearCompare = () => {
    setPokemonToCompare([]);
  };

  return (
    <CompareContext.Provider
      value={{
        pokemonToCompare,
        addPokemonToCompare,
        removePokemonFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);