import React from 'react';
import './Scenario.css';
//TODO: add scenario icon

const Scenario = (props)=>{
    return(
        <div className="Scenario__wrapper" onClick={props.clicked}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className="Scenario__icon-wrapper">
                <img className="Scenario__icon" alt={props.title} src={props.icon}/>
            </div>
        </div>
    )
}

export default Scenario;