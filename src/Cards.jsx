import React from 'react';

const Cards =(props)=>{
    const cDelete = ()=>{
        console.log("this is delete "+props.id);
        
    }
    return<>
    <div className="card">
        <div className="card-body">
            <p className="card-title">{props.val}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <button className = "btn btn-danger" onClick ={cDelete}>Delete</button>
        </div>
    </div>

    </>
}


export default Cards;