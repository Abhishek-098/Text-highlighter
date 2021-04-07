import React from 'react';

const Cards =(props)=>{
    console.log(props.val);
    return<>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.val}</h5>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>

    </>
}


export default Cards;