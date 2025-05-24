import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useCompare } from "../contexts/CompareContext";

function ComparePage() {
  const { pokemonToCompare, removePokemonFromCompare, clearCompare } =
    useCompare();
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemonToCompare.length === 0) {
      navigate("/");
    }
  }, [pokemonToCompare, navigate]);

  const renderStats = (pokemon) => {
    if (!pokemon) return null;

    return (
      <div className="pokemon-stats compare-stats">
        <h3>Estadísticas</h3>
        {pokemon.stats.map((statInfo) => (
          <div key={statInfo.stat.name} className="stat-bar">
            <span className="stat-name">
              {statInfo.stat.name.replace("-", " ")}:
            </span>
            <div className="stat-value-container">
              <div
                className="stat-value"
                style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}
              >
                {statInfo.base_stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTypes = (pokemon) => {
    if (!pokemon) return null;

    return (
      <div className="pokemon-types">
        <h3>Tipo</h3>
        <div className="types-list">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className={`type-badge ${typeInfo.type.name}`}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderAbilities = (pokemon) => {
    if (!pokemon) return null;

    return (
      <div className="pokemon-abilities">
        <h3>Habilidades</h3>
        <ul>
          {pokemon.abilities.map((abilityInfo) => (
            <li key={abilityInfo.ability.name}>
              {abilityInfo.ability.name.replace("-", " ")}
              {abilityInfo.is_hidden && (
                <span className="hidden-ability"> (Oculta)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="compare-page">
      <div className="compare-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Volver a la lista
        </Link>
        <h2>Comparar Pokémon</h2>
        <button onClick={clearCompare} className="clear-compare-button">
          Limpiar comparación
        </button>
      </div>

      <div className="compare-container">
        <div className="compare-column">
          {pokemonToCompare[0] ? (
            <div className="compare-pokemon">
              <div className="compare-pokemon-header">
                <h2>
                  {pokemonToCompare[0].name.charAt(0).toUpperCase() +
                    pokemonToCompare[0].name.slice(1)}
                </h2>
                <button
                  onClick={() =>
                    removePokemonFromCompare(pokemonToCompare[0].id)
                  }
                  className="remove-compare-button"
                >
                  <FaTimes />
                </button>
              </div>
              <img
                src={pokemonToCompare[0].sprites.front_default}
                alt={pokemonToCompare[0].name}
                className="compare-sprite"
              />
              {renderTypes(pokemonToCompare[0])}
              <div className="info-group">
                <p>Altura: {pokemonToCompare[0].height / 10} m</p>
                <p>Peso: {pokemonToCompare[0].weight / 10} kg</p>
              </div>
              {renderAbilities(pokemonToCompare[0])}
              {renderStats(pokemonToCompare[0])}
            </div>
          ) : (
            <div className="empty-compare-slot">
              <p>Selecciona un Pokémon para comparar</p>
            </div>
          )}
        </div>

        <div className="compare-column">
          {pokemonToCompare[1] ? (
            <div className="compare-pokemon">
              <div className="compare-pokemon-header">
                <h2>
                  {pokemonToCompare[1].name.charAt(0).toUpperCase() +
                    pokemonToCompare[1].name.slice(1)}
                </h2>
                <button
                  onClick={() =>
                    removePokemonFromCompare(pokemonToCompare[1].id)
                  }
                  className="remove-compare-button"
                >
                  <FaTimes />
                </button>
              </div>
              <img
                src={pokemonToCompare[1].sprites.front_default}
                alt={pokemonToCompare[1].name}
                className="compare-sprite"
              />
              {renderTypes(pokemonToCompare[1])}
              <div className="info-group">
                <p>Altura: {pokemonToCompare[1].height / 10} m</p>
                <p>Peso: {pokemonToCompare[1].weight / 10} kg</p>
              </div>
              {renderAbilities(pokemonToCompare[1])}
              {renderStats(pokemonToCompare[1])}
            </div>
          ) : (
            <div className="empty-compare-slot">
              <p>Selecciona otro Pokémon para comparar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
