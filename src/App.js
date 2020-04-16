import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'

import HomePage from './components/UserForm/HomePage'
import SignUp from './components/UserForm/SignUp'
import UserHomePage from './components/UserHomePage'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFountPage'

class App extends React.Component{

  state = {
    user: {
      username: '',
      bio: '',
      avatar: '',
      deck: {
        pokecards: []
      }
    },
    decks: {
      user_id: '',
      pokecards: []
    },
    token: ''
  }

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/persist',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
    }

  }

  handleResponse = (response) => {
    // debugger
    if (response.user) {
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    // console.log(userInfo);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(data => this.handleResponse(data))
  }

  handleLogin = (userInfo) => {
    fetch(`http://localhost:3000/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  addPokemonCard = (pokemonID, deckID) => {
    let newObject = {deck_id: deckID, pokemon_id: pokemonID}
    fetch("http://localhost:3000/pokecards", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newObject)
    })
    .then(r => r.json())
    .then(results => {
      let newArray = [...this.state.user.deck.pokecards, results]
      // let newObject = [...this.state.user.deck, ...newArray]
      // debugger
      this.setState({
        user: {...this.state.user, deck: {pokecards: newArray}}
      })
    })
    // console.log(pokemonID, "PokemonID", deckID, "Deck ID")
  }
 
  deleteUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(results => console.log(results))
  }
  // Create a new Register Form
  renderRegisterForm = () => {
    return <SignUp handleSubmit={this.handleRegister}/>
  }
  // WILL RENDER OUT THE LOGIN PAGE
  renderLoginForm = () => {
    return <HomePage handleSubmit={this.handleLogin}/>
  }

  renderProfile = (routerProps) => {
    return <UserProfile user={this.state.user} deleteUser={this.deleteUser}/>
  }

  renderHomepage = (routerProps) => {
    return <UserHomePage addPokemonCard={this.addPokemonCard} user={this.state.user} />
  }

  render(){

    // console.log(this.state.user.deck.pokecards);
    
    return (
      <div className="App">
        <Switch>
          {/* <Route path ='/' exact component={ HomePage }/> */}
          <Route exact path ='/' render={ this.renderLoginForm}/>
          <Route path ='/register' render={this.renderRegisterForm}/>
          <Route path ='/profile' render={this.renderProfile}/>
          <Route path ='/home' render={this.renderHomepage} />
          {/* <Route path ='/home' component={UserHomePage} /> */}
          <Route component={NotFound}/>
        </Switch> 
      </div>
    );
  }
}

export default withRouter(App);
