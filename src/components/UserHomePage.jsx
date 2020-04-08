import React, { Component } from 'react'
import Header from './common/Header'
import SearchBar from './SearchBar'
import PokemonContainer from './pokemons/PokemonContainer'
import { Container, Row, Col } from "shards-react";

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
        return (
            <>
            <Container>
                <Row>
                    <Col >
                        <Header/>
                    </Col>
                    <Col >
                        <SearchBar searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm}/>
                    </Col>
                </Row>

                <Row>
                        <Col>
                            <PokemonContainer pokemons = {this.filteredPokemonArray()}/>
                        </Col>
                </Row>
                </Container>
            </>
        )
    }
}

export default UserHomePage
