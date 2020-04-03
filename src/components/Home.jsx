import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './NavBar'

class Home extends Component {
    render() {
        return (
            <Router> 
            <div className="App">
              <Nav/>
              {/* HOME COMPONENT IS ACTIVATED ONCE THE USER SIGNS IN.  */}
              {/* WILL BE THE MAIN WEBSITE */}
            </div>
          </Router>
        )
    }
}

export default Home

