import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import './CSS/text.css';
import Cards from './Cards';


const Text =(props) =>{

    const [comments,addComment] = useState([]);
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
        document.querySelector('#btnenable').style.display = "None";
        

    }
    const ndata =comments.map((value,ind)=>{
        console.log(value);
        return(
            <Cards
                key = {ind}
                val = {value}
                />
        );
    })
    return<>
        <div className ='row pt-5'>
                            <div className = "col-lg-8 col-12 text_box">
                                <div className = "row pt-5">
                                    <div className = 'col-lg-8 mx-auto pt-5'>
                                    <div className ='js_selected_text'>
                                        <Highlighter 
                                        highlightClassName="YourHighlightClass"
                                            searchWords={comments}
                                            autoEscape={true}
                                            textToHighlight= {props.val}
                                            onMouseUp ={handleMouseUp}
                                            />
                                            <button id="btnenable" className="button_comment" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comment it" onClick={commentEvent}>C</button>

                                    </div>               
                                    </div>
                                </div>
                            </div>
                            <div className = "col-lg-4 col-12">
                                {ndata}

                            </div>
                        </div>

        

        
    </>
}

export default Text;
