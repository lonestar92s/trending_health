import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
		      <div className="container">
		        <span>Trending Health &#169; {new Date().getFullYear()}</span>
		        <span><a href ="#" className="social"><i className="instagram icon"></i></a></span>
		        <span><a href ="#" className="social"><i className="twitter icon"></i></a></span>
		        <span><a href ="#" className="social"><i className="linkedin icon"></i></a></span> 

		        	
		       
		      </div>

    	</footer>
        );
    }
}

