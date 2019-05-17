import React from 'react';
import Scenario from './Scenario/Scenario';
import {SCENARIO_IMGS} from '../../constants/ScenarioImages';


const Scenarios=(props)=>{
    if(!props.scenarios){
        return null;
    }
    return(
            <React.Fragment>  
            {props.scenarios.map((e)=>{
                return(<Scenario 
                            chosen={props.chosen}
                            key={e.title} 
                            icon={e.pic}
                            title={e.title} 
                            clicked={()=>props.clicked(e.title)}
                            background={`url(${SCENARIO_IMGS[e.title]})`}
                            image={props.image}
                        />);
            })}
       </React.Fragment>
    );
}

export default Scenarios;  