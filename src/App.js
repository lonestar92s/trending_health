import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js'
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Banner from './Components/Banner.js';

import './App.css';

export default class App extends Component {
  render(){
  return (
    <Router>
    <div>
    <Banner />
    <Navbar />
      
      <Route exact path="/" component={Home}  />
      <Route path='/about' component={About} /> 
      <Route path='/social' component={Contact} />
    
   
      </div>
      <Footer />
    </Router>
   )
  }
}

