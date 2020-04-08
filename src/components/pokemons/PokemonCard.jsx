import React from 'react'
import { Card, CardBody, CardImg } from "shards-react";


class PokemonCard extends React.Component {

    state = {
        flipped: false
    }

    handleClick = (e) => {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    render() {
        // console.log(this.props.pokemon.pokemon_type.map(type => console.log(type)));
        let {name, img, pokemon_type, weaknesses, hp} = this.props.pokemon
        
        return (
           <>
            
                <Card className='gutter'>
                    <CardImg className='imgSize' src={img} />
                    <CardBody>
                        <h6> {name}</h6>
                    </CardBody>
                </Card>
           
           </>
        )
    }
}

export default PokemonCard
