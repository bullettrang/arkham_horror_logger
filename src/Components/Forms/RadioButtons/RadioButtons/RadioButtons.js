import React from 'react';
import {RadioButton} from './RadioButton/RadioButton';
import './RadioButtons.css';


export const RadioButtons =(props)=>{
        return (
                <div className="Radio__form--choices">
                {props.choices.map((e)=>{
                        return( 
                            <RadioButton
                                key={e.description}
                                description={e.description} 
                                value={e.value} 
                                changed={props.handleChange}
                                type={props.type}
                                checked={props.current===e.value}/>
                            );  
                })}
            </div>
        );
}