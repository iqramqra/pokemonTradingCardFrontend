import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className='navBar'>
            <li>
                <NavLink to='/pokemons'>Pokemons</NavLink> 
                <NavLink to='/profile'>Account</NavLink>
            </li>
        </ul>
    )
}

export default NavBar
