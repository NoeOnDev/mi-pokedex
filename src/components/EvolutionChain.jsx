import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getPokemonSpecies,
  getEvolutionChain,
} from "../services/pokemonService";

function EvolutionChain({ pokemonId }) {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        setLoading(true);
        const speciesData = await getPokemonSpecies(pokemonId);

        const evolutionData = await getEvolutionChain(
          speciesData.evolution_chain.url
        );
        setEvolutionChain(evolutionData);
      } catch (err) {
        setError("Error al cargar la cadena de evolución.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvolutionChain();
  }, [pokemonId]);

  if (loading) return <div className="loading">Cargando evoluciones...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!evolutionChain) return null;

  const renderEvolutionChain = (chain) => {
    const pokemonId = chain.species.url.split("/")[6];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
      <div className="evolution-item">
        <Link to={`/pokemon/${chain.species.name}`} className="evolution-link">
          <img
            src={imgUrl}
            alt={chain.species.name}
            className="evolution-sprite"
          />
          <p>
            {chain.species.name.charAt(0).toUpperCase() +
              chain.species.name.slice(1)}
          </p>
          {chain.evolution_details && chain.evolution_details.length > 0 && (
            <div className="evolution-details">
              {chain.evolution_details[0].min_level && (
                <span>Nivel {chain.evolution_details[0].min_level}</span>
              )}
            </div>
          )}
        </Link>

        {chain.evolves_to && chain.evolves_to.length > 0 && (
          <>
            <div className="evolution-arrow">→</div>
            <div className="evolution-chain">
              {chain.evolves_to.map((evolvesTo, index) => (
                <div key={index}>{renderEvolutionChain(evolvesTo)}</div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="evolution-section">
      <h3>Evoluciones</h3>
      <div className="evolution-chain-container">
        {renderEvolutionChain(evolutionChain.chain)}
      </div>
    </div>
  );
}

export default EvolutionChain;
