import React from 'react';
import './Backdrop.css';
const BackDrop =(props)=>{
    return(
        <div className="backdrop" onClick={props.click}>
        <div className="backdrop-overlay"></div>
        </div>
    )
}

export default BackDrop; 