import React from 'react'
import PokemonCard from './PokemonCard'
import { Container, Row, Col } from "shards-react";

const PokemonContainer = (props) => {

    let pokemonArray =  props.pokemons.map((pokemon) => {
       return <PokemonCard key= {pokemon.id} pokemon={pokemon}/>
    })   

    // console.log(pokemonArray.pokemon_type);
    return (
        <Container className="pokePadding">
            <Row>
                {pokemonArray}
            </Row>
        </Container> 
    )
}

export default PokemonContainer
