import React from 'react';

const ResultChoice=(props)=>{
    return(
        <li style={props.style}>{props.result} {props.percent}</li>
    )
}


export default ResultChoice;