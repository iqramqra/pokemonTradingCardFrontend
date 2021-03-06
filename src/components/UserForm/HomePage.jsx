import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password} = this.state

    // console.log(this.props);
    
    return (
      <div className="homePage">
      <div className='appAside'>
        <h1>Tradémon</h1>
        <h6>Collect 'em all</h6>
      </div>

      <div className='appForm'>
        <div className='login100-form'>
          <form onSubmit={this.handleSubmit}>
            <input className='input100' type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
            <input className='input100' type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
            <button className='loginButton' type="submit" value="Submit">Log In</button>  
  
            <button className='signUpButton'>
              <Link to='/register'> Sign Up </Link>
            </button>
          </form>    
        </div>
      </div>
      </div>
    );
  }
}
export default LoginForm