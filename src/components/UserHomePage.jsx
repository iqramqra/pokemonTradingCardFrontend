import React, { Component } from 'react'
import Header from './common/Header'
import SearchBar from './SearchBar'
import PokemonContainer from './pokemons/PokemonContainer'

class UserHomePage extends Component {

    state = {
        pokemons: [],
        searchTerm: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/pokemons')
        .then (r => r.json())
        .then (_pokemons => this.setState({pokemons: _pokemons}))
    }

    changeSearchTerm = (termFromChild) => {
        this.setState({
          searchTerm: termFromChild
        })
      }

    filteredPokemonArray = () => {
        let {pokemons, searchTerm} = this.state       
        let pokemonArray = pokemons.filter((pokemon) => {
            return pokemon.name.includes(searchTerm) || pokemon.pokemon_type.includes(searchTerm)
        })
        return pokemonArray
    }

    render() {
        // console.log(this.state);    
        // debugger
        return (
            <>
            <div className='header'>
                <Header />
                <SearchBar searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
            </div>
            <div className='pokeContainer'>
                <PokemonContainer pokemons = {this.filteredPokemonArray()}/>
            </div>
            </>
        )
    }
}

export default UserHomePage
