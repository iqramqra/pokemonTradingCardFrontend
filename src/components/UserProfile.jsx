import React, { Component } from 'react'
import Header from './common/Header'
import UsersCard from './pokemons/PokemonCard'
import { Avatar } from '@material-ui/core'

import Button from '@material-ui/core/Button';

class UserProfile extends Component {

    handleClick = (e) => {
        this.props.deleteUser(this.props.user.id)
    }

    render() {
        
        let {username, bio, avatar} = this.props.user
    
        let  userPokecards = this.props.user.deck.pokecards.map ( card => {
            return <UsersCard key={ card.pokemon.id} pokemon= {card.pokemon}/> 
        })

        console.log(this.props.user.deck.pokecards);
        
        return (
            <div className='globalCss'>
                <Header />
                <div>
                    <h5>Interesting fact</h5>
                    <h6> {bio}</h6>
                    <Avatar variant="rounded" alt={username} src = {avatar}/>
                    
                    <Button variant="outlined" size="small" color="primary" onClick={this.handleClick}>Delete account</Button>
                </div>
                <div>
                    <h1>{username}'s pokemons</h1>
                    {userPokecards} 
                </div>
            </div>
        )
    }
}

export default UserProfile
