import { useState } from 'react'
import React from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

const App = () => {
  const [pokemonKey, setPokemonKey] = useState(pokemonList[0].name);
  return (
    <React.Fragment>
      <PokemonCard pokemonList={pokemonList} pokemonKey={pokemonKey} />
      <NavBar pokemonList={pokemonList} pokemonKey={pokemonKey} setKey={setPokemonKey}/>
    </React.Fragment>
    
  );
}

export default App;
