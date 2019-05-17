import React from 'react';
import shortid from "shortid";  //for animations, need a new key prop to render each animation
import SubmitButton from '../../Forms/Button/SubmitButton';
import Grid from './Grid/Grid';

import './CampaignForm.css'
const CampaignForm =({submitHandler,selection,campaign,selectHandler})=>{
    const getId = () => {
        const id = shortid.generate();
        return id;
    };
    return(
        <form 
            className="campaign-menu_main--form" 
            onSubmit={submitHandler}
        >
            <Grid 
                current={selection} 
                campaigns={campaign} 
                clicked={selectHandler}
                />
            <h1 className="campaign-menu_main--form--header" key={getId()}>{selection}</h1>
            <SubmitButton title={"Submit"}/>
        </form>
    )
}

export default CampaignForm;
