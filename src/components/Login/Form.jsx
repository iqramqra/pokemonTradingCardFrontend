import React, { Component } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class Form extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (e) =>{
        let {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    render() {
        // console.log(this.props.handleSubmit(this.state));
        let {formName} = this.props
        let {username, password} = this.state
        
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
                    <div className='pageSwitch'>
                        <a href='#' className='toggleSwitchActive'> Sign In</a>
                        <a href='#' className='toggleSwitch'> Sign Up</a>
                    </div>
                    {/* START OF THE FORM */}
                    <div className='login100-form'>

                        <form onSubmit={this.handleSubmit}>
                            <h1>{formName}</h1>
                            <input className='input100' type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange}></input>
                            <input className='input100' type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange}></input>
                            <input className='loginButton' type='submit' value='Submit'/>
                            {/* <button  type='submit'>Login</button> */}
                        </form>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Form

