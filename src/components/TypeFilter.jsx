const pokemonTypes = [
  "normal",
  "fuego",
  "agua",
  "planta",
  "eléctrico",
  "hielo",
  "lucha",
  "veneno",
  "tierra",
  "volador",
  "psíquico",
  "bicho",
  "roca",
  "fantasma",
  "siniestro",
  "dragón",
  "acero",
  "hada",
];

const typeMapping = {
  normal: "normal",
  fuego: "fire",
  agua: "water",
  planta: "grass",
  eléctrico: "electric",
  hielo: "ice",
  lucha: "fighting",
  veneno: "poison",
  tierra: "ground",
  volador: "flying",
  psíquico: "psychic",
  bicho: "bug",
  roca: "rock",
  fantasma: "ghost",
  siniestro: "dark",
  dragón: "dragon",
  acero: "steel",
  hada: "fairy",
};

function TypeFilter({ selectedType, onTypeChange }) {
  return (
    <div className="type-filter">
      <h3>Filtrar por tipo:</h3>
      <div className="filter-buttons">
        <button
          className={!selectedType ? "active" : ""}
          onClick={() => onTypeChange(null)}
        >
          Todos
        </button>
        {pokemonTypes.map((type) => (
          <button
            key={type}
            className={`${selectedType === typeMapping[type] ? "active" : ""} ${
              typeMapping[type]
            }`}
            onClick={() => onTypeChange(typeMapping[type])}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TypeFilter;
