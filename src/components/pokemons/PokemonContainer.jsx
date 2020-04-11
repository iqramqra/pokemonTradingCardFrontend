import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonContainer = (props) => {

    let pokemonArray =  props.pokemons.map( (pokemon) => {
        return <PokemonCard key= {pokemon.id} pokemon={pokemon}/>   
    })
    return (
        <div className='PokemonContainer'>
            {pokemonArray}
        </div>
    )
}

export default PokemonContainer
