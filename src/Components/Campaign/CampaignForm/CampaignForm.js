import React from 'react';
import SubmitButton from '../../Forms/Button/SubmitButton';
import Grid from './Grid/Grid';
import './CampaignForm.css'
const CampaignForm =({submitHandler,selection,campaign,selectHandler})=>{
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
            <h1 className="campaign-menu_main--form--header">{selection}</h1>
            <SubmitButton/>
        </form>
    )
}

export default CampaignForm;
