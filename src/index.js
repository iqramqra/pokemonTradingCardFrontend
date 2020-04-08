import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);