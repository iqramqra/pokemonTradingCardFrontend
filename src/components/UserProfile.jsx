import React, { Component } from 'react'
import Header from './common/Header'
import PokemonCard from './pokemons/PokemonCard'
import { Avatar } from '@material-ui/core';


class UserProfile extends Component {


    handleClick = (e) => {
        this.props.deleteUser(this.props.user.id)
    }


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
                    <button onClick={this.handleClick}>Delete</button>
                    <h1> {username}'s pokemons</h1>
                    <h3> FunFact: {bio}</h3>
                    <Avatar alt={username} src = {avatar}/>
                </div>

                <div>
                    {userPokecards} 
                </div>
            </>
        )
    }
}

export default UserProfile
