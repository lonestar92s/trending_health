import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js'
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Jumbotron from './Components/Jumbotron.js';
import './App.css';

export default class App extends Component {
  render(){
  return (
    <Router>
    <div>
    <Navbar />
      
      <Route exact path="/"  />
      <Route path='/about' component={About} /> 
      <Route path='/contact' component={Contact} />
    
     <div className="container">  
          <h2>Welcome to Trending Health</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Nulla facilisi morbi tempus iaculis. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Leo urna molestie at elementum eu facilisis sed odio. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc lobortis mattis aliquam faucibus purus in. Orci nulla pellentesque dignissim enim sit amet venenatis. Id ornare arcu odio ut. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Duis at tellus at urna. Purus sit amet luctus venenatis lectus.
            </p>
          </div>
      
    </div>
         <div className="container">  
          <h2>Welcome to Trending Health</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Nulla facilisi morbi tempus iaculis. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Leo urna molestie at elementum eu facilisis sed odio. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc lobortis mattis aliquam faucibus purus in. Orci nulla pellentesque dignissim enim sit amet venenatis. Id ornare arcu odio ut. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Duis at tellus at urna. Purus sit amet luctus venenatis lectus.
            </p>
          </div>
      <footer className="footer">
          <div className="container">
            <span className="text-muted">Trending Health &#169; {new Date().getFullYear()}</span>
          </div>
      </footer>
      

    </Router>
   )
  }
}

