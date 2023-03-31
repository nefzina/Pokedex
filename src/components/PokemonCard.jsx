import PropTypes from 'prop-types';

const PokemonCard = ({pokemonList, pokemonKey}) => {
    const pokemon = pokemonList.filter(p => p.name == pokemonKey);

    return (
    <figure>
        {!pokemon[0].imgSrc ? <p>???</p> : <img src={pokemon[0].imgSrc} alt={pokemon[0].name}/>}
        <figcaption>{pokemon[0].name}</figcaption>
    </figure>
    );
}

// PokemonCard.propTypes = {
//         name: PropTypes.string.isRequired,
//         imgSrc: PropTypes.string,
//   }

export default PokemonCard;