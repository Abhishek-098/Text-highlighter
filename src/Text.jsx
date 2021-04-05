import React, { useState } from 'react';
import './CSS/text.css';


var Highlight = require('react-highlighter');

const Text =(props) =>{
    const [comments,addComment] = useState([]);
    const handleMouseUp =()=>{

        const text = window.getSelection().toString();
        addComment(oldarr=>[...oldarr,text]);

        
    }
    console.log(comments);
    return<>
        <div className ='js_selected_text'>
            <p onMouseUp = {handleMouseUp}><Highlight search = "designed by fairies and completed by">{props.val}</Highlight></p>
        </div>
        
    </>
}

export default Text;