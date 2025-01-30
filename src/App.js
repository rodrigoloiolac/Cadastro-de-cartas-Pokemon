import React, { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter)
  );

  return (
    <div className="App">
      <h1>Cadastro de Cartas Pokémon</h1>
      <PokemonForm addPokemon={addPokemon} />
      <SearchBar setFilter={setFilter} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};

export default App;

