import React from 'react';
import Scenario from './Scenario/Scenario';
import {NOZ_imgs} from '../../constants/ScenarioImages';
import {DWL_imgs} from '../../constants/ScenarioImages';
import './Scenarios.css';
const Scenarios=(props)=>{
    if(!props.scenarios){
        return null;
    }
    console.log(props);
    return(
            <React.Fragment>
            
            {props.scenarios.map((e)=>{
                return(<Scenario 
                            chosen={props.chosen}
                            key={e.title} 
                            icon={e.pic}
                            title={e.title} 
                            clicked={()=>props.clicked(e.title)}
                            background={`url(${NOZ_imgs[e.title]})`}
                            image={props.image}
                        />);
            })}
       </React.Fragment>
    );
}

export default Scenarios;  