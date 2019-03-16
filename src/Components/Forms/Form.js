import React from 'react';
import {Question} from '../Question/Question';
import {RadioButtons} from './RadioButtons/RadioButtons';
import {data} from '../../constants/constants';

export const Form =(props)=>{
    return(
        <div>
            <Question qString={"Question stuff"}/>
            <RadioButtons choices={data['The Gathering'].questions[0].choices}/>
        </div>
    )
}