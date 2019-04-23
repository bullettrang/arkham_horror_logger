import React from 'react';
import {CAMPAIGN_IMAGES} from '../../../../constants/CampaignImages';
import {getBackgroundStyle} from '../../../../util/styleHelpers';
import "./Grid.css";


 const Grid = (props)=>{
    const renderCampaigns=(props)=>{
        const {campaigns,current,clicked}=props;

        let camps = campaigns.map((e)=>{
             return (
                    <div onClick={()=>clicked(e.title)} 
                        key={e.id} 
                        style={getBackgroundStyle(CAMPAIGN_IMAGES[e.title],current===e.title)} 
                        className="cell">
                    </div>
                    );
         });

         return camps;
    }

    return(
    <div className="container">
        {renderCampaigns(props)}
    </div>);
}

export default Grid;