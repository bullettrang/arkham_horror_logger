import React,{Component} from 'react';
import Scenarios from './Scenarios';
import {NOZ_icons} from '../../constants/icons';
import {DWL_icons} from '../../constants/icons';
import scenarioMenu from '../../constants/scenarioConstants';
import SubmitButton from '../Forms/Button/SubmitButton';
import "./ScenarioMenu.css"
class ScenarioMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            scenarios:{
                "Night of the Zealot":[{title:"The Gathering",pic:NOZ_icons["The Gathering"]},{title:"The Midnight Masks",pic:NOZ_icons["The Midnight Masks"]},{title:"The Devourer Below",pic:NOZ_icons["The Devourer Below"]}],
                "The Dunwich Legacy":[{title:"Extracurricular Activities",pic:DWL_icons["Extracurricular Activities"]},{title:"The House Always Wins",pic:DWL_icons["The House Always Wins"]},{title:"The Essex County Express",pic:DWL_icons["The Essex County Express"]},{title:"Blood on the Altar",pic:DWL_icons["Blood on the Altar"]},{title:"Undimensioned and Unseen",pic:DWL_icons["Undimensioned and Unseen"]},{title:"Where Doom Awaits",pic:DWL_icons["Where Doom Awaits"]},{title:"Lost in Time and Space",pic:DWL_icons["Lost in Time and Space"]}],
                // "The Path to Carcosa":["Curtain Calls","The Last King","Echoes of the Past","The Unspeakable Oath","A Phantom of Truth","The Pallid Mask","Black Star Rise","Dim Carcosa"],
                // "The Forgotten Age":['The Untamed Wilds','The Doom of Eztil','Threads of Fate','The Boundary Beyond','Heart of the Elders','The City of Archives','The Depths of Yoth','Shattered Aeons']
            },
            selected:null
        }
    }

    selectHandler=(sc)=>{
        this.setState({selected:sc})
        
    }

    submitHandler=(e)=>{
        e.preventDefault();
        if(this.state.selected){
            this.props.selectionHandler(this.state.selected);
        }
        
    }

    render(){
        const {campaignTitle}=this.props;
        if(!campaignTitle){
            return null;
        }
        
        return(
            <div className="ScenarioMenu__wrapper">
                <div className="ScenarioMenu__main">
                    <div className="ScenarioMenu__header">
                        <h1>{campaignTitle}</h1>
                    </div>
                    <form className="ScenarioMenu__form" onSubmit={this.submitHandler}>
                        <div className="ScenarioMenu__form--items">
                            <Scenarios
                                chosen={this.state.selected} 
                                clicked={this.selectHandler} 
                                scenarios={scenarioMenu[campaignTitle]}
                            />
                        </div>
                            <SubmitButton/>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default ScenarioMenu;