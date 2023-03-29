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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <PokemonCard { ...pokemonList[pokemonIndex]}/>
      { pokemonIndex > 0 ? <button onClick ={() => {setPokemonIndex(pokemonIndex - 1)}}>Previous</button>: null}
      { pokemonIndex < (pokemonList.length-1) ? <button onClick ={() => {setPokemonIndex(pokemonIndex + 1)}}>Next</button>: null}      
    </div>
  );
}

export default App;
