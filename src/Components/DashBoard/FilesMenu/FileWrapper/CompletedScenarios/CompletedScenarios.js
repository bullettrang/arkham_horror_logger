import React from 'react';

const CompletedScenarios = (props)=>{
    if(props.completedScenarios.length<1)
        return null;
    return(
        <React.Fragment>
            {props.completedScenarios.map((e)=>{
                return(
                    <li key={e._id} style={{listStyle:"none"}}>{e.scenarioTitle}</li>
                )
            })}
        </React.Fragment>
    );
}

export default CompletedScenarios;