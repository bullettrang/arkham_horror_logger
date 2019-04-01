import React from 'react';
import './Scenario.css';

const selectedStyle={
    opacity:.8,
    transform: 'translateY(0.4rem), scale(1.1)',
    color:'white',
    background:'orange',
    transition:'all .2s ease-in-out'
    
}
const Scenario = (props)=>{
    return(
        <div className="Scenario__wrapper" onClick={props.clicked} style={props.chosen===props.title ?selectedStyle:null}>
            <div className="Scenario__heading">
                <div className="Scenario__header">
                    <h1>{props.title}</h1>
                </div>
                <div className="Scenario__icon-wrapper">
                    <img className="Scenario__icon" alt={props.title} src={props.icon}/>
                </div>
            </div>
            <div className="Scenario__main">
                <div className="Scenario__main--card">1</div>

            </div>
        </div>
    )
}



export default Scenario;