import React from 'react';
import {CAMPAIGN_IMAGES} from '../../../../constants/CampaignImages';
import "./Grid.css";


 const Grid = (props)=>{

    const renderCampaigns=(props)=>{
        const {campaigns,current,clicked}=props;

        let camps = campaigns.map((e)=>{
            let isModal;
            let isScale;
            //determine modal
            if(current!==e.title){
                isModal=`linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${CAMPAIGN_IMAGES[e.title]})`
            }
            else{
                isModal=`url(${CAMPAIGN_IMAGES[e.title]})`;
                isScale= "scale(1.1)";
            }
    
            const cellStyle= {
                background:`${isModal}`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                border:`${current===e.title? '3px solid silver':'none'}`,
                zIndex:`${current===e.title? "2":"1"}`,
                transform:isScale
            }
    
             return (
                    <div onClick={()=>clicked(e.title)} 
                        key={e.id} 
                        style={cellStyle} 
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