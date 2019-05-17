import React from 'react';

import "./SubmitButton.css";

 const SubmitButton =(props)=>{
    return(
        <button className="SubmitButton">{props.title}</button>
    );
}

export default SubmitButton;