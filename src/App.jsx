import { useState } from 'react'
import './App.css'
import PokemonCard from './composants/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },];

const App = () => {
  const pokemon = pokemonList[0];
  return (
    <div>
      {/* <PokemonCard pokemon={pokemonList[0]}/> */}
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default App;
