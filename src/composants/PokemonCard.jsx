import PropTypes from 'prop-types';

const PokemonCard = ({name, imgSrc}) => {
    return (
    <figure>
        {!imgSrc ? <p>???</p> : <img src={imgSrc} alt={name}/>}
        <figcaption>{name}</figcaption>
    </figure>
    );
}

PokemonCard.propTypes = {
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
  }

export default PokemonCard;