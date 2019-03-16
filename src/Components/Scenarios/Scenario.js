import React from 'react';
import './Scenario.css';
//TODO: add scenario icon

const Scenario = (props)=>{
    return(
        <div className="Scenario__wrapper" onClick={()=>console.log('clicked',props.title)}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                {"Image"}
            </div>
        </div>
    )
}

export default Scenario;