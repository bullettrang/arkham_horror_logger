import React from 'react';
import CompletedScenarios from './CompletedScenarios/CompletedScenarios';
import {CAMPAIGN_IMAGES} from '../../../../constants/CampaignImages';
const FileWrapper = (props)=>{
    const {selected,title,clicked,completedScenarios,id} = props;
    const styledBGSelected={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`url(${CAMPAIGN_IMAGES[title]})`,
        transition:'all .2s'
    }
    
    const  styledBG={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${CAMPAIGN_IMAGES[title]})`,
        transition:'all .2s'
    }

    const styledContentSelected={
        color:"#333333",
        background:"#f8f8f8",
        transition:'all .2s'
    }
    
    const styledContent={
        color:"#f8f8f8",
        background:"#333333",
        transition:'all .2s'
    }

    const styledWrapped={
        opacity:".8",
        transition:'all .2s'
    }
    
    const  styledWrappedSelected={
        transform:"scale(1.1)",
        MozBoxShadow:    '0px 5px 5px  #000',
        WebkitBox: '0px 5px 5px  #000',
        boxShadow:  '0px 5px 5px  #000',
        opacity:"1",
        transition:'all .2s'
    }

    if(selected===id){
        return (
            <div 
                className="File_Wrapper"
                onClick={()=>clicked(id)}
            >
                <div
                    style={{...styledBGSelected,...styledWrappedSelected} }
                    className={"DashBoard-File"} 
                > 
                </div>
                <div className="File_Content" style={{...styledContentSelected,...styledWrappedSelected}}>
                    <h2>{title}</h2>
                    <h3>COMPLETED SCENARIOS</h3>
                    <CompletedScenarios 
                        completedScenarios={completedScenarios}/>
                </div>
            </div>
        );
        
    }else{
        return (
            <div 
                className="File_Wrapper"
                onClick={()=>clicked(id)}
            >
                <div
                    style={{...styledBG,...styledWrapped} }
                    className={"DashBoard-File"} 
                > 
                </div>
                <div className="File_Content" style={{...styledContent,...styledWrapped}}>
                    <h2>{title}</h2>
                    <h3>COMPLETED SCENARIOS</h3>
                    <CompletedScenarios 
                        completedScenarios={completedScenarios}/>
                </div>
            </div>
        );
    }
}

export default FileWrapper;