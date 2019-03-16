import React from 'react';
import Scenario from './Scenario';
import './Scenarios.css';
const Scenarios=(props)=>{
    return(
        <div className="Scenario__wrapper">
            {props.scenarios.map((e)=>{
                return(<Scenario key={e.title} icon={e.pic}title={e.title}/>);
            })}
        </div>
    );
}

export default Scenarios;