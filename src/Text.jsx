import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import './CSS/text.css';



const Text =(props) =>{

    const [comments,addComment] = useState(["First"]);
    const handleMouseUp =(event)=>{
        const text = window.getSelection().toString();
        if(text.length){
            document.querySelector('#btnenable').style.display = "block";
            const x = event.pageX;
            const y = event.pageY;
            document.querySelector('#btnenable').style.left = `${x}px`;
            document.querySelector('#btnenable').style.top = `${y}px`;

        }
        
    }
    const commentEvent =()=>{
        const text = window.getSelection().toString();
        addComment(oldarr=>[...oldarr,text]);   
        console.log(comments);
    }
    return<>
        <div className ='js_selected_text'>
            <Highlighter 
               highlightClassName="YourHighlightClass"
                searchWords={["is","and"]}
                autoEscape={true}
                textToHighlight= {props.val}
                onMouseUp ={handleMouseUp}
                />
                <button id="btnenable" className="button_comment" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comment it" onClick={commentEvent}>C</button>

        </div>
        
    </>
}

export default Text;