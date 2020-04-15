import React from 'react'
import {Button} from '@material-ui/core';
import TradePokemon from './TradePokemon'
import {Link} from 'react-router-dom'
import { positions } from '@material-ui/system';

class PokemonCard extends React.Component {

    handleClick = (e) => {
        return <TradePokemon key={this.props.pokemon.id} pokemon={e.target.parentElement.dataset}/>
        // console.log(e.target.parentElement.dataset)
        // console.log(this.props.pokemon.id)
    }

    render() {

        // console.log(this.props.userPokemon.map(here => {return here}));
        // debugger
        // console.log(this.props.pokemon.pokemon_type.map(type => console.log(type)));
        // console.log(this.props);


        // console.log(this.props);
        
        // THIS IS CODE CODE FOR ALL THE POKEMON CONTAINERS
        let {id, name, img, pokemon_type, weaknesses, hp} = this.props.pokemon
        return (
            <>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <img src={img} alt={name} />
                        {/* <h1 >{name}</h1> */}
                    </div>
                    <div className="back">
                        <h1 className='titleCardBack'>{name}</h1>
                        <h3 className='pokeInfoCard'>Pokemon Type:</h3>
                        <h3 className='pokeInfoCard'>{pokemon_type.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>Weakness</h3>
                        {/* <h3 className='pokeInfoCard'>{weaknesses}</h3> */}
                        <h3 className='pokeInfoCard'>{weaknesses.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>HEALTH POINTS</h3>
                        <h3 className='pokeInfoCard'>{hp}</h3>
                    </div>
                 </div>
                <Button variant="contained" fullWidth={true} color="primary" data-value = {id} onClick = {this.handleClick}>Trade Pokecards</Button>
            </div>
            </>
        )
    }
}

export default PokemonCard
