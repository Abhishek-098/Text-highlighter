import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import './CSS/text.css';

function removeItem(array, item){
    for(var i in array){
        if(array[i].comVal===item){
            array.splice(i,1);
            break;
        }
    }
    for(var j in array){
        array[j].cno-=1;
    }
}
var count=0;
const Text =(props) =>{
    const [objects,addObject] =useState({
        comVal:"",
        // title:"",
        date:"",
        cno:0,
    });
    const [comments,addComment] = useState([]);
    const handleMouseUp =(event)=>{
        const text = window.getSelection().toString();
        if(text.length){
            document.querySelector('#btnenable').style.display = "block";
            const x = event.pageX;
            const y = event.pageY;
            document.querySelector('#btnenable').style.left = `${x}px`;
            document.querySelector('#btnenable').style.top = `${y}px`;
            addObject(()=>{
                count+=1
                var x = new Date();
                var h = x.toLocaleTimeString();
                return{
                    comVal:text,
                    date: h,
                    cno:count,
                };
            });

        }
        
    }
    const commentEvent =()=>{
        addComment(oldarr=>[...oldarr,objects]);  
        addObject(()=>{
            return{
                comVal:"",
                date:"",
            }
        })
        document.querySelector('#btnenable').style.display = "None";
        

    }
    const getArr=()=>{
        const c = [];
        for(var i =0;i<comments.length;i++){
            c.push(comments[i].comVal);
        }
        return c;
    }
    const arrofComm = getArr()

    
    
    // eslint-disable-next-line array-callback-return
    const ndata =comments.map((value,ind)=>{
        const cDelete=()=>{
            addComment(()=>{
                removeItem(comments,value.comVal);

                return comments;

            })
            commentEvent();
            count-=1;
    
        }
        

        if(value.comVal===""){
            console.log("Comment deleted");
        }else{

        return(
            <div className="card my-2" key={ind}>
                                <div className="card-body">
                                    <h6>{`COMMENT:${value.cno}`}</h6>
                                    <p className="card-text">{value.comVal}</p>
                                    <button className = " delete_comment btn btn-danger" onClick ={cDelete}>Delete</button>
                                    <span className= "time">{value.date}</span>
                                </div>
                            </div>
        );}
    })
    return<>
        <div className ='row pt-5'>
                            <div className = "col-lg-8 col-12 text_box">
                                <div className = "row pt-5">
                                    <div className = 'col-lg-8 mx-auto pt-5'>
                                    <div className ='js_selected_text'>
                                        <Highlighter 
                                        highlightClassName="YourHighlightClass"
                                            searchWords={arrofComm}
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
