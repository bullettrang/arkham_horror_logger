import React from 'react';
import {Question} from './Question/Question';
import {RadioButtons} from './RadioButtons/RadioButtons';
import {data} from '../../constants/constants';
import "./Form.css";
export const Form =(props)=>{
    return(
        <div className="Form-Wrapper">
            <Question qString={"Question stuff DID YOU BURN DOWN THE HOUSE?"}/>
            <RadioButtons choices={data['The Gathering'].questions[0].choices}/>
        </div>
    )
}