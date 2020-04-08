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
      decks: []
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

  // Create a new Register Form
  renderRegisterForm = () => {
    return <SignUp handleSubmit={this.handleRegister}/>
  }
  // WILL RENDER OUT THE LOGIN PAGE
  renderLoginForm = () => {
    return <HomePage handleSubmit={this.handleLogin}/>
  }

  renderProfile = (routerProps) => {
    return <UserProfile user= {this.state.user}/>
  }

  render(){
    return (
      <div className="App">
        <Switch>
          {/* <Route path ='/' exact component={ HomePage }/> */}
          <Route exact path ='/' render={ this.renderLoginForm}/>
          <Route path ='/register' render={this.renderRegisterForm}/>
          <Route path ='/profile' render={this.renderProfile}/>
          <Route path ='/home' component={UserHomePage} />
          <Route component={NotFound}/>
        </Switch> 
      </div>
    );
  }
}

export default withRouter(App);
