import React from 'react';
export const RadioButton=(props)=>{
    return(
    <div>
        <input type="radio" id={props.description} name={props.description} value={props.value} onChange={props.changed}/>
        <label htmlFor={props.description}>{props.description}</label>
    </div>);
}
