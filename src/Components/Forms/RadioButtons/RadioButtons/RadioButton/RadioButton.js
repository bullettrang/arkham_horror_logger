import React from 'react';
import "./RadioButton.css"
export const RadioButton=(props)=>{

   const selectedClass='Radio__choice--selected';

    return(
        <div className={`Radio__choice `}>
                <input
                    className={`Radio__choice--input`}
                    type="radio" 
                    id={props.description} 
                    name={props.description} 
                    value={props.value} 
                    onChange={(e)=>{props.changed(e)}}
                    checked={props.checked}
                />
                <label htmlFor={props.description} className={props.checked? selectedClass:null}>{props.description}</label>
        </div>
        );
    

}
