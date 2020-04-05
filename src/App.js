import React from 'react'
// import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/Login/Form'
import RegisterForm from './components/Login/Register'

class App extends React.Component {

  state = {
    user: {
      username: '',
      bio: '',
      avatar: ''
    },
    token: '',
    pokemons: []
  }

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/persist',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
    fetch('http://localhost:3000/pokemons')
    .then(r => r.json())
    .then(pokemonArray => console.log(pokemonArray)
    )
  }

  handleResponse = (response) => {
    if (response.user) {
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/home")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  // Create a new Register Form
  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }
  // WILL RENDER OUT THE LOGIN PAGE
  renderLoginForm = () => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }


  render() {
    console.log(this.state.pokemons);
    
    return (
      <div className="App">
        <Router>
           
          {/* <Nav/> NAV BAR WILL GO IN THE HOME COMPONENT */}
          <Route path='/' exact component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/home' component={Home}/>
        </Router>
        </div>
    )
  }
}

export default App;