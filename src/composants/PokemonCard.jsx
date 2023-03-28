import PropTypes from 'prop-types';

const PokemonCard = ({pokemon}) => {
    return (
    !pokemon.imgSrc ?
    <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
    </figure>:
    <figure>
        <img 
        src={pokemon.imgSrc}
        alt={pokemon.name}
        />
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {
      pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
      }).isRequired,
  }

export default PokemonCard;