import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await axios.get(
      `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    console.error("Error obteniendo lista de pokemon:", error);
    throw error;
  }
};

export const getPokemonDetail = async (nameOrId) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${nameOrId}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo detalles del pokemon ${nameOrId}:`, error);
    throw error;
  }
};

export const getPokemonByType = async (type) => {
  try {
    const response = await axios.get(`${API_URL}/type/${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo pokémon del tipo ${type}:`, error);
    throw error;
  }
};

export const getPokemonSpecies = async (nameOrId) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon-species/${nameOrId}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo especie del pokemon ${nameOrId}:`, error);
    throw error;
  }
};

export const getEvolutionChain = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo cadena de evolución:", error);
    throw error;
  }
};
