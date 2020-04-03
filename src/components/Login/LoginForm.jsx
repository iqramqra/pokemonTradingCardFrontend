import React, { Component } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <Fragment>
                <div className='appAside'></div>
                <div className='appForm'>
                    <div className='pageSwitch'>
                        <a href='#' className='toggleSwitchActive'> Sign In</a>
                        <a href='#' className='toggleSwitch'> Sign Up</a>
                    </div>

                    <div className='formInput'>
                        <form>
                            
                            <input type='text' id='username' name='username' placeholder='Username'></input>
                            <input type='password' id='password' name='password' placeholder='Password'></input>
                            <button className='FormField__Button' type='submit'>Login</button>
                        </form>
                    </div>

                    {/* <div className='FormCenter'>
                        <form className='FormFields' onSubmit={this.handleSubmit}>
                            <div className='FormField'>
                                <label className='FormField__Label'> Username</label>
                                <input type = 'text' id='username' className='FormField__Label' placeholder='username' name='username'></input>

                                <label className='FormField__Label'> Password</label>
                                <input type ='password' id='username' className='FormField__Label' placeholder='username' name='username'></input>
                            </div>

                        </form>
                    </div> */}




                </div>
            </Fragment>
        )
    }
}

export default LoginForm

