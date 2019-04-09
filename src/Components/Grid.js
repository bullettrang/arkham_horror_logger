import React from 'react';
import {CAMPAIGN_IMAGES} from '../constants/CampaignImages';
import "./Grid.css";


 const Grid = (props)=>{
     let camps = props.campaigns.map((e)=>{
        let isModal;
        let isScale;
        //determine modal
        if(props.current!==e.title){
            isModal=`linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${CAMPAIGN_IMAGES[e.title]})`
        }
        else{
            isModal=`url(${CAMPAIGN_IMAGES[e.title]})`;
            isScale= "scale(1.1)";
        }

         return (
                <div onClick={()=>props.clicked(e.title)} 
                    key={e.id} 
                    style={{
                        background:`${isModal}`,
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        border:`${props.current===e.title? '3px solid silver':'none'}`,
                        zIndex:`${props.current===e.title? "2":"1"}`,
                        transform:isScale
                        }} 
                        className="cell">
                </div>
                );
     })
    return(
    <div className="container">
        {camps}
    </div>);
}

export default Grid;