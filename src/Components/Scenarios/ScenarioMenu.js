import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect } from "react-router-dom";
import {uniqBy,xorBy} from 'lodash';

import Scenarios from './Scenarios';
import {NOZ_icons} from '../../constants/icons';
import {DWL_icons} from '../../constants/icons';
import  SCENARIOCONSTANTS from '../../constants/scenarioConstants';
import SubmitButton from '../Forms/Button/SubmitButton';
import {setQuestion,setQuestions,setScenario,setAnswers} from '../../actions/index';

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
            selected:null,
            toForm:false
        }
    }

    componentDidMount(){
        if(this.props.currentFile !==null){
            const {completedScenarios}=this.props.currentFile;

            let mergedAnswers;
            if(completedScenarios.length!==0){
                mergedAnswers = this.mergeAndReturnSetOfAnswers(completedScenarios)
               this.props.setAnswers(mergedAnswers)
            }  
        }
    }

    mergeAndReturnSetOfAnswers(completedScenarios){
        let answers;
        let mergedAnswers;
        answers= completedScenarios.map((sc)=>sc.answers).reduce((acc,ans)=>{       //grab all answers from user's completed campaigns
            return acc.concat(ans)                                                  //flatten array of  answers to a single array 'answers'
       },[]);
       mergedAnswers= uniqBy(answers,(ans)=>{                                       //remove duplicate questions
        return Object.keys(ans)[0];
       });
       return mergedAnswers;
    }


    selectHandler=(sc)=>{
        this.setState({selected:sc});
    }

    submitHandler=(e)=>{
        e.preventDefault();
        const {setScenario,setQuestions,setQuestion}=this.props;
        const {selected}=this.state;
        if(selected){
            setScenario(selected);
            setQuestions(selected)
            setQuestion();
            //setMode('form');
            this.setState({toForm:true})
        }
    }


    render(){
            //change this
        const {toForm} = this.state;
        const {selectedCampaign}=this.props;
        if(toForm){       
            return <Redirect to={'/form'}/>;
        }
        else if(selectedCampaign===null){
            return <Redirect to={'/campaign '}/>;
        }
        
        const {currentFile}=this.props;
        let unfinishedScenarios =SCENARIOCONSTANTS[selectedCampaign];
        if(currentFile){
            let completedScenarios =currentFile.completedScenarios.map((sc)=>{return {title:sc.scenarioTitle}});
             unfinishedScenarios = xorBy(SCENARIOCONSTANTS[selectedCampaign],completedScenarios,'title');

        }



        //need to filter out completed campaigns
        
        
        return(
            <div className="ScenarioMenu__wrapper" >
                <div className="ScenarioMenu__main">
                    <div className="ScenarioMenu__header">
                        <h1>{selectedCampaign}</h1>
                    </div>
                    <form className="ScenarioMenu__form" onSubmit={this.submitHandler}>
                        <div className="ScenarioMenu__form--items">
                            <Scenarios
                                chosen={this.state.selected} 
                                clicked={this.selectHandler} 
                                scenarios={unfinishedScenarios}
                            />
                        </div>
                            <div className="ScenarioMenu__form--button">
                                <SubmitButton title={"Submit"}/>
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

const mapDispatchToProps={
    setQuestions:(questions)=>setQuestions(questions),
    setQuestion:()=>setQuestion(),
    setAnswers:(answers)=>setAnswers(answers),
    setScenario:(scenario)=>setScenario(scenario)
}

export default connect(mapStateToProps,mapDispatchToProps)(ScenarioMenu);