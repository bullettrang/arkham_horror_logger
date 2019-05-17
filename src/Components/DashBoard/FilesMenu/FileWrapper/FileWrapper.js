import React from 'react';
import {withRouter} from 'react-router-dom';
import CompletedScenarios from './CompletedScenarios/CompletedScenarios';
import {CAMPAIGN_IMAGES} from '../../../../constants/CampaignImages';
import DeleteButton from '../../../Forms/Button/DeleteButton';

const FileWrapper = (props)=>{
    const {selected,title,clicked,completedScenarios,id,deleted} = props;
    const styledBGSelected={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`url(${CAMPAIGN_IMAGES[title]})`,
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }
    
    const  styledBG={
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${CAMPAIGN_IMAGES[title]})`,
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }

    const styledContentSelected={
        color:"#333333",
        background:"#f8f8f8",
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }
    
    const styledContent={
        color:"#f8f8f8",
        background:"#333333",
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }

    const styledWrapped={
        opacity:".8",
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }
    
    const  styledWrappedSelected={
        transform:"scale(1.1)",
        MozBoxShadow:    '0px 5px 5px  #000',
        WebkitBox: '0px 5px 5px  #000',
        boxShadow:  '0px 5px 5px  #000',
        opacity:"1",
        transition:'opacity 300ms linear,transform 300ms cubic-bezier(0.455,0.03,0.515,0.955)'
    }

    if(selected===id){
        return (
            <div 
                className="File_Wrapper"
                onClick={()=>clicked(id,title)}
            >
                <div
                    style={{...styledBGSelected,...styledWrappedSelected} }
                    className={"DashBoard-File"} 
                > 
                <DeleteButton height={'25px'} width={'25px'} className={"deletebutton"} onClick={()=>deleted(id)}/>
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
                onClick={()=>clicked(id,title)}
            >
                <div
                    style={{...styledBG,...styledWrapped} }
                    className={"DashBoard-File"} 
                > 
                <DeleteButton height={'25px'} width={'25px'} className={"deletebutton"}  onClick={()=>deleted(id)}/>
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

export default withRouter(FileWrapper);