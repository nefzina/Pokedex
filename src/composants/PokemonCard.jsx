

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
export default PokemonCard;