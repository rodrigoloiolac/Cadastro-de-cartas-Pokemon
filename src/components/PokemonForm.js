import React, { useState } from "react";
import { getPokemonDetails } from "../services/pokeapi";
import './PokemonForm.css';

const PokemonForm = ({ addPokemon }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState(null);

  const fetchPokemon = async () => {
    const data = await getPokemonDetails(name);
    if (data) {
      setDetails({
        name: data.name,
        type: data.types.map((t) => t.type.name).join(", "),
        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
        image: data.sprites.front_default, // URL da imagem
      });
    } else {
      alert("Pokémon não encontrado!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details) {
      addPokemon(details);
      setName("");
      setDetails(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Pokémon"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={fetchPokemon}>
        Buscar Detalhes
      </button>
      {details && (
        <div>
          <p>Nome: {details.name}</p>
          <p>Tipo: {details.type}</p>
          <p>HP: {details.hp}</p>
          <img src={details.image} alt={details.name} style={{ height: "100px" }} />
          <button type="submit">Adicionar Pokémon</button>
        </div>
      )}
    </form>
  );
};

export default PokemonForm;
