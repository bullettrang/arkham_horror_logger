import React,{Component} from 'react';
import {CheckBox} from './CheckBox';
export const  CheckBoxes =(props)=>{

    return(
        <React.Fragment>
            {props.choices.map(item=>(
            <label key={item.key}>
                {item.description}
                <CheckBox 
                    description={item.description} 
                    checked={props.checkedItems.get(item.description)} 
                    onChange={props.handleChange} 
                    />
            </label>
        ))}
        </React.Fragment>
    );
    
}
