import React from 'react';
import './CSS/app.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Text from './Text';
import data from './data';


const App =() =>{
    return<>
        <section>
            <div className ="container-fluid">
                <div className = "row outer">
                    <div className = "col-lg-10 col-12 mx-auto">
                        <Text val = {data}/>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default App;