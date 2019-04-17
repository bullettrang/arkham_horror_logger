import React from 'react';
import SubmitButton from '../Forms/Button/SubmitButton';
import Grid from '../Grid';
import './CampaignForm.css'
const CampaignForm =(props)=>{
    return(
        <form 
            className="campaign-menu_main--form" 
            onSubmit={props.submitHandler}
        >
            <Grid 
                current={props.selection} 
                campaigns={props.campaign} 
                clicked={props.selectHandler}
                />
            <h1 className="campaign-menu_main--form--header">{props.selection}</h1>
            <SubmitButton/>
        </form>
    )
}

export default CampaignForm;
