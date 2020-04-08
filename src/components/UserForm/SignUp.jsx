import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    bio: "",
    avatar: ""
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
   
    // console.log(this.props.handleSubmit);

    let {username, password, bio, avatar} = this.state

    return (
      <>
        <div className='appAside'>
          <h5>POKEMON TCG APPLICATION</h5>
        </div>

        <div className='appForm'>
          <div className='login100-form'>
            <form onSubmit={this.handleSubmit}>
                
                <input className='input100' type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
                
                <input className='input100' type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                
                <input className='input100' type="text" placeholder="One Fun Fact About Yourself" name="bio" value={bio} onChange={this.handleChange}/>
                
                <input className='input100' type="text" placeholder="Profile Picture Link" name="avatar" value={avatar} onChange={this.handleChange}/>
                <button className='loginButton' type="submit" value="Submit">Register</button>
            </form>
          </div>
          <Link to='/'> Sign In </Link>
        </div>
        </>
    );
  }
}
export default RegisterForm;