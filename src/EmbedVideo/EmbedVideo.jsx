import React, { useState, useEffect } from 'react';

import React, { Component } from 'react';




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