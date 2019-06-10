import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
		      <div className="container">
		        Trending Health &#169; {new Date().getFullYear()}
		       
		      </div>

    	</footer>
        );
    }
}