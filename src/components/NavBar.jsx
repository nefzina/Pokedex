import React from "react";
const NavBar = ({len, setPokemonIndex, index}) => {
    console.log(index);
    

    return (
        <React.Fragment>
        { index > 0 ? 
        <button onClick ={() => {setPokemonIndex(index - 1)}}>Previous</button>: null}

        { index < (len-1) ? 
        <button onClick ={() => {setPokemonIndex(index + 1)}}>Next</button>: null}      
        </React.Fragment>
        );
    }

export default NavBar;