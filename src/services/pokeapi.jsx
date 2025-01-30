import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
};
