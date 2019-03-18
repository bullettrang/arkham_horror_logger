import React from 'react';
import Scenario from './Scenario';
import './Scenarios.css';
const Scenarios=(props)=>{
    return(
        <div className="Scenarios__wrapper">
            {props.scenarios.map((e)=>{
                return(<Scenario 
                        chosen={props.chosen}
                        key={e.title} 
                        icon={e.pic}
                        title={e.title} 
                        clicked={()=>props.clicked(e.title)}
                        />);
            })}
        </div>
    );
}

export default Scenarios;  