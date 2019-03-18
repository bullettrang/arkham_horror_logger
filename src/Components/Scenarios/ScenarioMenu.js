import React,{Component} from 'react';
import Scenarios from './Scenarios';
import {NOZ_icons} from '../../constants/icons';
import "./ScenarioMenu.css"
class ScenarioMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            scenarios:{
                "Night of the Zealot":[{title:"The Gathering",pic:NOZ_icons["The Gathering"]},{title:"The Midnight Masks",pic:NOZ_icons["The Midnight Masks"]},{title:"The Devourer Below",pic:NOZ_icons["The Devourer Below"]}],
                // "The Dunwich Legacy":["Extracurricular Activities","The House Always Wins","The Miskatonic Museum","The Essex County Express","Blood on the Altar","Undimensioned and Unseen","Where Doom Awaits","Lost in Time and Space"],
                // "The Path to Carcosa":["Curtain Calls","The Last King","Echoes of the Past","The Unspeakable Oath","A Phantom of Truth","The Pallid Mask","Black Star Rise","Dim Carcosa"],
                // "The Forgotten Age":['The Untamed Wilds','The Doom of Eztil','Threads of Fate','The Boundary Beyond','Heart of the Elders','The City of Archives','The Depths of Yoth','Shattered Aeons']
            },
            selected:null
        }
    }

    selectHandler=(sc)=>{
        console.log('selectHandler [ScenarioMenu.js]')
        this.setState({selected:sc})
    }

    submitHandler=(e)=>{
        e.preventDefault();
        this.props.selectionHandler(this.state.selected);
    }

    render(){
        const {campaignTitle}=this.props;
        return(
            <div className="ScenarioMenu__wrapper">
                <div className="ScenarioMenu__main">
                    <div className="ScenarioMenu__header">
                        <h1>{campaignTitle}</h1>
                    </div>
                    <form onSubmit={this.submitHandler}>
                    <Scenarios
                        chosen={this.state.selected} 
                        clicked={this.selectHandler} 
                        scenarios={this.state.scenarios[campaignTitle]}/>
                        <button>SUBMIT</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default ScenarioMenu;