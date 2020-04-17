import React from 'react'
import Button from '@material-ui/core/Button';

class PokemonCard extends React.Component {

    handleClick = () => {
        this.props.addPokemonCard(this.props.pokemon.id)
    }

    render() {  
        // THIS IS CODE CODE FOR ALL THE POKEMON CONTAINERS
        let {name, img, pokemon_type, weaknesses, hp, id} = this.props.pokemon
        return (
            <>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <img src={img} alt={name} />
                        <h1>{name}</h1>
                    </div>
                    <div className="back">
                        <h1 className='titleCardBack'>{name}</h1>
                        <h3 className='pokeInfoCard'>Pokemon Type:</h3>
                        <h3 className='pokeInfoCard'>{pokemon_type.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>Weakness</h3>
                        <h3 className='pokeInfoCard'>{weaknesses.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>HEALTH POINTS</h3>
                        <h3 className='pokeInfoCard'>{hp}</h3>
                        <Button className='cardButton' variant="contained" size="large" color='primary' onClick={this.handleClick}>COLLECT CARD</Button>
                    </div>
                 </div>
                 <div>
                 </div>

                 
            </div>
            </>
        )
    }
}

export default PokemonCard
