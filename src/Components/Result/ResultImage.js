import React from 'react';
const ResultImage=(props)=>{
    const bgStyled={
        background:`url(${props.picture})`,
        backgroundSize:'cover',
        backgroundPosition:"center",
        maxWidth:'250px',
        minWidth:'100px',
        maxHeight:'auto',
        minHeight:'100px',
        marginRight:'2em',
        borderRadius:'3px',
    }
    return(
        <div className="Result-Picture" style={{...bgStyled}}>

        </div>
    )
}

export default ResultImage;