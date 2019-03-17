import React from 'react';
import {Question} from './Question/Question';
import {RadioButtonContainer} from './RadioButtons/RadioButtonContainer';
import {data} from '../../constants/constants';
import "./Form.css";

export const Form =(props)=>{
    return(
        <div className="Form-Wrapper">
            <Question qString={"Question stuff DID YOU BURN DOWN THE HOUSE?"}/>
            {/* <RadioButtons type={data['The Gathering'].questions[0].type} choices={data['The Gathering'].questions[0].choices}/> */}
            <RadioButtonContainer/>
        </div>
    )
}