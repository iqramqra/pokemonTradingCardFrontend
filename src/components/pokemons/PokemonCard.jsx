import React from 'react'

class PokemonCard extends React.Component {

    render() {  
        // THIS IS CODE CODE FOR ALL THE POKEMON CONTAINERS
        let {name, img, pokemon_type, weaknesses, hp} = this.props.pokemon
        return (
            <>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <img src={img} alt={name} />
                    
                    </div>
                    <div className="back">
                        <h1 className='titleCardBack'>{name}</h1>
                        <h3 className='pokeInfoCard'>Pokemon Type:</h3>
                        <h3 className='pokeInfoCard'>{pokemon_type.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>Weakness</h3>
                        <h3 className='pokeInfoCard'>{weaknesses.join(', ')}</h3>
                        <h3 className='pokeInfoCard'>HEALTH POINTS</h3>
                        <h3 className='pokeInfoCard'>{hp}</h3>
                    </div>
                 </div>
            </div>
            <div>
                <button className='tradeButton'>Trade Card</button>
            </div>
            </>
        )
    }
}

export default PokemonCard
