import React, { Component } from 'react'
import Header from './common/Header'
import PokemonCard from './pokemons/PokemonCard'

class UserProfile extends Component {
    render() {
        
        let {username, bio, avatar, deck} = this.props.user

        let { pokecards } = deck
        // debugger

        let  userPokecards = pokecards.map ( card => {
            // console.log(card.pokemon.id); 
            return < PokemonCard key={ card.pokemon.id} pokemon= {card.pokemon}/> 
            
        })

        return (
            <>
                <Header />
                <div>
                    <h1> {username}'s pokemons</h1>
                    <h3> FunFact: {bio}</h3>
                    <img className = 'avatar' src = {avatar} alt={username} />
                </div>

                <div>
                    {userPokecards} 
                </div>
            </>
        )
    }
}

export default UserProfile
