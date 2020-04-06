import React, { Component } from 'react'
import { Fragment } from 'react'

class Register extends Component {

    state = {
        username:'',
        password:'',
        bio:'',
        avatar:''
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    render() {
        let {username, password, bio, avatar} = this.state

        return (
            <Fragment>
                {/* LEFT SIDE OF THE PAGE */}
                <div className='appAside'>
                    
                        <h1>POKEMON</h1>
                        <h6>A Pokemon Trading Game</h6>  
                </div>

                {/* RIGHT SIDE OF THE PAGE */}
                <div className='appForm'>
                    {/* DIV FOR THE TOGGLE BUTTONS ON TOP OF PAGE */}
                    {/* <div className='pageSwitch'>
                        <a href='http://localhost:3001/' className='toggleSwitch'> Sign In</a>
                        <a href='http://localhost:3001/register' className='toggleSwitchActive'> Sign Up</a>
                    </div> */}
                    {/* START OF THE FORM */}
                    <div className='login100-form'>
                        <form onSubmit={this.handleSubmit}>
                            <input className='input100' type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange}></input>
                            <input className='input100' type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange}></input>
                            <input className='input100' type='text' name='bio' placeholder='A Fun Fact About Yourself' value={bio} onChange={this.handleChange}></input>
                            <input className='input100' type='text' name='avatar' placeholder='URL link' value={avatar} onChange={this.handleChange}></input>
                            <input className='loginButton' type='submit' placeholder='Register' value='Submit'/>
                            {/* <button className='loginButton' type='submit' value='Submit'>Register</button> */}
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Register
