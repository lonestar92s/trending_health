import React, { Component } from 'react';
import YouTube from 'react-youtube';



export default class Contact extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div>
				
				<div className="container">	
					<h2>Social</h2>
									<YouTube
				        videoId="2g811Eo7K8U"
				        opts={opts}
				        onReady={this._onReady}
						/>
					 
			  
					</div>
						
			</div>
        );
    }
}