import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaCheck, FaTimes } from "react-icons/fa";
import { useCompare } from "../contexts/CompareContext";
import { getPokemonDetail } from "../services/pokemonService";

function CompareButton({ pokemon, isDetailPage = false }) {
  const [loading, setLoading] = useState(false);
  const { addPokemonToCompare, removePokemonFromCompare, pokemonToCompare } =
    useCompare();
  const navigate = useNavigate();

  const isSelected = isDetailPage
    ? pokemonToCompare.some((p) => p.id === pokemon.id)
    : pokemonToCompare.some((p) => p.name === pokemon.name);

  const handleCompareClick = async () => {
    try {
      setLoading(true);

      if (isSelected) {
        if (isDetailPage) {
          removePokemonFromCompare(pokemon.id);
        } else {
          const pokemonDetails = await getPokemonDetail(pokemon.name);
          removePokemonFromCompare(pokemonDetails.id);
        }
      } else {
        if (isDetailPage) {
          const added = addPokemonToCompare(pokemon);
          if (added && pokemonToCompare.length === 1) {
            navigate("/compare");
          }
        } else {
          const pokemonDetails = await getPokemonDetail(pokemon.name);
          const added = addPokemonToCompare(pokemonDetails);
          if (added && pokemonToCompare.length === 1) {
            navigate("/compare");
          }
        }
      }
    } catch (error) {
      console.error("Error al gestionar Pokémon para comparar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCompareClick}
      disabled={loading}
      className={`compare-button ${isSelected ? "selected" : ""}`}
      title={isSelected ? "Quitar de comparación" : "Comparar este Pokémon"}
    >
      {loading ? (
        "Procesando..."
      ) : isSelected ? (
        <>
          <FaCheck /> Seleccionado
        </>
      ) : (
        <>
          <FaBalanceScale /> Comparar
        </>
      )}
    </button>
  );
}

export default CompareButton;
