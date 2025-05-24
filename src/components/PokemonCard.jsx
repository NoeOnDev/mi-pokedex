import { Link } from "react-router-dom";
import CompareButton from "./CompareButton";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card-wrapper">
      <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
        <div className="pokemon-card-inner">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            alt={pokemon.name}
          />
          <h4>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h4>
        </div>
      </Link>
      <div className="pokemon-card-footer">
        <CompareButton pokemon={pokemon} />
      </div>
    </div>
  );
}

export default PokemonCard;
