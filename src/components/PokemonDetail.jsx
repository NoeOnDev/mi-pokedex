import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../services/pokemonService";
import EvolutionChain from "./EvolutionChain"; // Añadir esta importación

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        const data = await getPokemonDetail(name);
        setPokemon(data);
      } catch (err) {
        setError("Error al cargar los detalles del Pokémon.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  if (loading) return <div className="loading">Cargando detalles...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!pokemon) return null;

  return (
    <div className="pokemon-detail">
      <Link to="/" className="back-button">
        ← Volver a la lista
      </Link>

      <div className="pokemon-detail-card">
        <div className="pokemon-header">
          <h1>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <p className="pokemon-id">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
        </div>

        <div className="pokemon-images">
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} frente`}
            className="pokemon-sprite"
          />
          {pokemon.sprites.back_default && (
            <img
              src={pokemon.sprites.back_default}
              alt={`${pokemon.name} espalda`}
              className="pokemon-sprite"
            />
          )}
        </div>

        <div className="pokemon-types">
          <h3>Tipo:</h3>
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

        <div className="pokemon-info">
          <div className="info-group">
            <p>Altura: {pokemon.height / 10} m</p>
            <p>Peso: {pokemon.weight / 10} kg</p>
          </div>

          <div className="pokemon-abilities">
            <h3>Habilidades:</h3>
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
        </div>

        <div className="pokemon-stats">
          <h3>Estadísticas:</h3>
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
        <EvolutionChain pokemonId={pokemon.id} />
      </div>
    </div>
  );
}

export default PokemonDetail;
