import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
		      <div>
		        <nav className="Items">
		        <ul>
		        <li><span>Trending Health &#169; {new Date().getFullYear()}</span></li>
		        </ul>
		        <ul className="Links">
		        <li className="footer-item"><span><a href ="#" className="social"><i className="instagram icon"></i></a></span></li>
		        <li className="footer-item"><span><a href ="#" className="social"><i className="twitter icon"></i></a></span></li>
		        <li className="footer-item"><span><a href ="#" className="social"><i className="linkedin icon"></i></a></span></li>
		        </ul>
		        </nav> 

		        	
		       
		      </div>

    	</footer>
        );
    }
}

