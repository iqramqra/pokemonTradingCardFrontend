import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

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

    return (
      <>
      <h5>POKEMON TCG APPLICATION</h5>

      <div className='appForm'>
        <div className='login100-form'>

          <form onSubmit={this.handleSubmit}>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />  */}
            <TextField id="outlined-basic" className='.MuiTextField-root' label="Username" variant="outlined" type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
            <TextField id="outlined-basic" className='input100' label="Password" variant="outlined" type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
            <button className='loginButton' type="submit" value="Submit">Log In</button>
          </form>
        </div>
          <Link to='/register'> Sign Up </Link>
      </div>
      </>
    );
  }
}
export default LoginForm