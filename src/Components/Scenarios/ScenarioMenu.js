import React,{Component} from 'react';
import Scenarios from './Scenarios';
import {NOZ_icons} from '../../constants/icons';
import {DWL_icons} from '../../constants/icons';
import scenarioMenu from '../../constants/scenarioConstants';
import SubmitButton from '../Forms/Button/SubmitButton';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {Redirect } from "react-router-dom";
import "./ScenarioMenu.css"

class ScenarioMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            scenarios:{
                "Night of the Zealot":[{title:"The Gathering",pic:NOZ_icons["The Gathering"]},{title:"The Midnight Masks",pic:NOZ_icons["The Midnight Masks"]},{title:"The Devourer Below",pic:NOZ_icons["The Devourer Below"]}],
                "The Dunwich Legacy":[{title:"Extracurricular Activities",pic:DWL_icons["Extracurricular Activities"]},{title:"The House Always Wins",pic:DWL_icons["The House Always Wins"]},{title:"The Miskatonic Museum",pic:DWL_icons["The Miskatonic Museum"]},{title:"The Essex County Express",pic:DWL_icons["The Essex County Express"]},{title:"Blood on the Altar",pic:DWL_icons["Blood on the Altar"]},{title:"Undimensioned and Unseen",pic:DWL_icons["Undimensioned and Unseen"]},{title:"Where Doom Awaits",pic:DWL_icons["Where Doom Awaits"]},{title:"Lost in Time and Space",pic:DWL_icons["Lost in Time and Space"]}],
                // "The Path to Carcosa":["Curtain Calls","The Last King","Echoes of the Past","The Unspeakable Oath","A Phantom of Truth","The Pallid Mask","Black Star Rise","Dim Carcosa"],
                // "The Forgotten Age":['The Untamed Wilds','The Doom of Eztil','Threads of Fate','The Boundary Beyond','Heart of the Elders','The City of Archives','The Depths of Yoth','Shattered Aeons']
            },
            selected:null
        }
    }

    componentDidMount(){
        let answers;//todo
        if(this.props.currentFile.completedScenarios.length!==0){
           answers= this.props.currentFile.completedScenarios.map((sc)=>sc.answers).reduce((acc,ans)=>{
                return acc.concat(ans)
           },[]);
           console.log(answers);
           this.props.setAnswers(answers)
        }
        
        
    }

    selectHandler=(sc)=>{
        this.setState({selected:sc});
    }

    submitHandler=(e)=>{
        e.preventDefault();
        const {setScenario,setQuestions,setQuestion,setMode}=this.props;
        const {selected}=this.state;
        if(selected){
            setScenario(selected);
            setQuestions(selected)
            setQuestion();
            setMode('form');
        }
    }


    render(){
            //change this
        const {selectedScenario,selectedCampaign}=this.props;
        if(selectedScenario){       //selected scenario
            return <Redirect to={'/form'}/>;
        }
        else if(selectedCampaign===null){
            return <Redirect to={'/campaign '}/>;
        }
        
        return(
            <div className="ScenarioMenu__wrapper">
                <div className="ScenarioMenu__main">
                    <div className="ScenarioMenu__header">
                        <h1>{selectedCampaign}</h1>
                    </div>
                    <form className="ScenarioMenu__form" onSubmit={this.submitHandler}>
                        <div className="ScenarioMenu__form--items">
                            <Scenarios
                                chosen={this.state.selected} 
                                clicked={this.selectHandler} 
                                scenarios={scenarioMenu[selectedCampaign]}
                            />
                        </div>
                            <div className="ScenarioMenu__form--button">
                                <SubmitButton/>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({choices,auth,file}) => {
    return {
      selectedCampaign:choices.selectedCampaign,
      selectedScenario: choices.selectedScenario,
      auth,
      currentFile:file.currentFile
    }
  }

export default connect(mapStateToProps,actions)(ScenarioMenu);