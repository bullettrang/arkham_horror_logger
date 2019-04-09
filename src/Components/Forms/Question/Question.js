import React from 'react';

import './Question.css';
export const Question=(props)=>{
    return(
    <div className="Question__wrapper" key={props.getQuestionKey()}>
        <div className="Question__header">
            <h1 className="Question__header--question">{props.qString}</h1>
        </div>
    </div>
    );
}