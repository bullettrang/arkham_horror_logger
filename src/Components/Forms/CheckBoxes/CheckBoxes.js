import React from 'react';
import {CheckBox} from './CheckBox';

import './CheckBoxes.css'


export const  CheckBoxes =(props)=>{

    return(
        <div className="CheckBoxes__wrapper">
            {props.choices.map(item=>(
                <CheckBox
                    key={item.key} 
                    description={item.description} 
                    checked={props.checkedItems.get(item.description)} 
                    onChange={props.handleChange} 
                    />
        ))}
        </div>
    );
    
}
