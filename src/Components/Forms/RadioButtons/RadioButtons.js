import React,{Component} from 'react';
import {RadioButton} from './RadioButton';
import './RadioButtons.css';


//radio buttons not working
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
                                checked={props.current===e.value}/>
                            );  
                })}
            </div>
        );
}