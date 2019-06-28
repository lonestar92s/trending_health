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
		        <li className="footer-item"><span><a href ="https://www.instagram.com/trendinghealthrx/ " className="social" target="_blank" rel="noopener noreferrer"><i className="instagram icon"></i></a></span></li>
		        <li className="footer-item"><span><a href ="https://www.youtube.com/channel/UCxhUs47cRjB6x1B05T6Y63g " className="social" target="_blank" rel="noopener noreferrer"><i className="youtube icon"></i></a></span></li>

		         <li className="footer-item"><span><a href ="https://m.facebook.com/TrendingHealth-1185750118248260/ " className="social" target="_blank" rel="noopener noreferrer"><i className="facebook icon"></i></a></span></li>
		        <li className="footer-item"><span><a href ="#" className="social"><i className="twitter icon"></i></a></span></li>
		        <li className="footer-item"><span><a href ="#" className="social"><i className="linkedin icon"></i></a></span></li>
		        </ul>
		        </nav> 

		        	
		       
		      </div>

    	</footer>
        );
    }
}