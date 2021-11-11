import React, { useState, useEffect } from 'react';


import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'

class VideoSuggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup> );
    }
}
 
export default VideoSuggestion;




const EmbedVideo = (props) =>{
    return (
    <>
            <div>  
                <div> 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2hol2sS3ONs" 
                             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> 
                 </div>
                <div> Title </div>
                <div>  Description </div>
            </div>

    </>
                )
}

export default EmbedVideo;