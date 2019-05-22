import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.js'
import Navbar from './Components/Navbar.js'
import './App.css';

export default class App extends Component {
  render(){
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home} />   
    </div>
    </Router>
   )
  }
}

