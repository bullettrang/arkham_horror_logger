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
//props: type,choices,qString
//
export const Form =(props)=>{
    const {question,scenarioTitle,submit}=props;
    let answers=null;
    if(question.type==='radio'){
        answers=<RadioButtonContainer
                    question={question} 
                    scenarioTitle={scenarioTitle} 
                    choices={question.choices}
                    submit={submit}/>
    }
    else{
        answers=<CheckBoxesContainer
                        question={question}  
                        scenarioTitle={scenarioTitle} 
                        choices={question.choices}
                        submit={submit}/>
    }
    
    return(
        <div className="Form-Wrapper">
            <Question qString={question.qString}/>
            {answers}
        </div>
    )
}