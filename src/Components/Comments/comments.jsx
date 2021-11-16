import axios from "axios";
import React from "react";
import Replies from '../Replies/Replies'

const Comments = ({videoId}) =>{

    
console.log(videoId);
if (videoId) {
    return(
       
        <div>
        <h2>Comments</h2>
        <Replies />
        </div>
    )}
else{
    return(
        <div>
            <h2>Create Comment</h2>
        </div>
    )
}
}

export default Comments;