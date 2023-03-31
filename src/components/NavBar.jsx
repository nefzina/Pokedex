import React from "react";
const NavBar = ({pokemonList, pokemonKey, setKey}) => {    

    return (
        <React.Fragment>
            {pokemonList.map((pokemon) => (
                <button key={pokemon.name} onClick={()=>
                setKey(pokemonKey= pokemon.name)}>
                {pokemon.name}
                </button>))}
        </React.Fragment>
        );
    }

export default NavBar;