import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo.png'


export default class Navbar extends Component {
  
    render() {
        return (
	

        <nav className="navbar navbar-expand-md mb-4">
		    <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>
		     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		     <div className="container">
		      	<div className="collapse navbar-collapse" id="navbarCollapse">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item active">
			            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/about">About</Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/social">Social</Link>
			          </li>
			           <li className="nav-item">
			            <Link className="nav-link" to="/resources">Resources</Link>
			          </li>
			        </ul>
		       </div>
		    </div>
    	</nav>


        );
    }
}