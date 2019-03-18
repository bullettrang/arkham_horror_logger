import React from 'react';
import {Question} from './Question/Question';
import {RadioButtonContainer} from './RadioButtons/RadioButtonContainer';
import {CheckBoxesContainer} from './CheckBoxes/CheckBoxesContainer';
import "./Form.css";


//TODO: Form gets props of type and decides
//to render EITHER:
//1. Radio Buttons
//OR
//2. Check Boxes    
export const Form =(props)=>{
    let answers=null;
    if(props.type==='radio'){
        answers=<RadioButtonContainer choices={props.choices}/>
    }
    else{
        answers=<CheckBoxesContainer choices={props.choices}/>
    }
    
    return(
        <div className="Form-Wrapper">
            <Question qString={"Question stuff DID YOU BURN DOWN THE HOUSE?"}/>
            {/* <RadioButtons type={data['The Gathering'].questions[0].type} choices={data['The Gathering'].questions[0].choices}/> */}
            {answers}
        </div>
    )
}