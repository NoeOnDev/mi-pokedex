import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
      <div className="pokemon-card-inner">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`}
          alt={pokemon.name}
        />
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      </div>
    </Link>
  );
}

export default PokemonCard;
