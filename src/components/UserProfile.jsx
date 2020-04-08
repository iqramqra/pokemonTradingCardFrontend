import React, { Component } from 'react'
import Header from './common/Header'
import PokemonCard from './pokemons/PokemonCard'
import { Container, Row, Col } from "shards-react";

class UserProfile extends Component {

    render() {

        let {id, username, bio, avatar, decks} = this.props.user
        // debugger

        return (
            <>
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>

                <Row>
                    <h1> {username}'s pokemons</h1>
                    <h3> FunFact: {bio}</h3>
                    <img src = {avatar} alt={username} />
                </Row>
            </Container>
            </>
        )
    }
}

export default UserProfile
