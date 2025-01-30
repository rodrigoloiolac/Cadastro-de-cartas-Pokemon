import React from "react";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <h2>Cartas Cadastradas</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <img src={pokemon.image} alt={pokemon.name} style={{ height: "150px" }} />
            <p>Nome: {pokemon.name}</p>
            <p>Tipo: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;


