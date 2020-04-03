import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login/LoginForm'

function App() {
  return (
    <Router> 
      <div className="App">
        {/* <Nav/> */}
        <Route path='/' exact component={Login}/>
        <Route path='/home' component={Home}/>
      </div>
    </Router>
  );
}

export default App;
