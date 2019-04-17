import React from 'react';
import './Scenario.css';


const Scenario = (props)=>{
    const selectedStyle={
        opacity:.8,
        transform: 'scale(1.1)',
        background:props.background,
        transition:'all .2s ease-in-out'
        
    }
    const notSelectedStyle={
        background:props.background,
        transition:'all .2s ease-in-out'
    }
    return(
        <div className="Scenario__wrapper" onClick={props.clicked} style={props.chosen===props.title ?selectedStyle:notSelectedStyle} >
            <div className="Scenario__heading">
                <div className="Scenario__header">
                    <h1>{props.title}</h1>
                </div>
                <div className="Scenario__icon-wrapper">
                    <img className="Scenario__icon" alt={props.title} src={props.icon}/>
                </div>
            </div>
        </div>
    )
}



export default Scenario;