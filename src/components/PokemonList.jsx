import { useState, useEffect } from "react";
import { getPokemonList } from "../services/pokemonService";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const data = await getPokemonList(ITEMS_PER_PAGE, offset);
        setPokemonList(data.results);
        setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
      } catch (err) {
        setError("Error al cargar los Pokémon. Intenta de nuevo más tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (loading) return <div className="loading">Cargando Pokémon...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pokemon-list-container">
      <h2>Pokédex</h2>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PokemonList;
