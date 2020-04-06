import React from 'react'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom'

const Home = () => (
  <div>
    <div>
      <NavLink to='/pokemons'>Pokemons</NavLink>
    </div>
    <div>
      <NavLink to='/profile'>Account</NavLink>
    </div>
  </div>
)

export default Home

