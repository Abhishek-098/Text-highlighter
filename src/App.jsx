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
                        <div className ='row pt-5'>
                            <div className = "col-lg-8 col-12 text_box">
                                <div className = "row pt-5">
                                    <div className = 'col-lg-8 mx-auto pt-5'>
                                        <Text val={data}/>                
                                    </div>
                                </div>
                            </div>
                            <div className = "col-lg-4 col-12">
                                {/* <h2>input your comments here </h2> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default App;
