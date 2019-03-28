import React from 'react';
import "./RadioButton.css"
export const RadioButton=(props)=>{

   const greenClass='Affirmitive';
   const redClass= 'Decline';
   let chosenClass;
   
    if(props.type==='radio' && props.description==='TRUE'){
        chosenClass=greenClass;
    }
    else if(props.type==='radio' && props.description==='FALSE'){
        chosenClass=redClass;
    }

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
                <label htmlFor={props.description}>{props.description}</label>
        </div>
        );
    

}
