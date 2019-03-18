import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
//import {Form} from './Components/Forms/Form';
//import {CheckBoxesContainer} from './Components/Forms/CheckBoxes/CheckBoxesContainer';
import './App.css';
import {data} from './constants/constants';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedCampaign:"",
      selectedScenario:"",
      currentQuestion:null,
      currentQuestionIdx:0,
      totalQuestions:null,
      userAnswers:new Map()
    }
  }

  campaignSelectionHandler=(campaign)=>{
    this.setState({selectedCampaign:campaign});
  }

  scenarioSelectionHandler=(scenarioTitle)=>{
    this.setState({selectedScenario:scenarioTitle },()=>this.setQuestionHandler(this.state.selectedScenario))
  }

  setQuestionHandler=(sc)=>{
   let {questions} =data[sc];
    if(this.state.selectedScenario.length>0){
      this.setState({currentQuestion:questions[this.state.currentQuestionIdx]},()=>console.log(this.state.currentQuestion));
    }
  }
  
  render() {

    return (
      <div className="App">
        <CampaignMenu campaignSelectionHandler={this.campaignSelectionHandler}/>
        {this.state.selectedCampaign.length>0?<ScenarioMenu 
                                                  campaignTitle={this.state.selectedCampaign} 
                                                  selectionHandler={this.scenarioSelectionHandler} 
                                                  setQuestionHandler={this.setQuestionHandler}/> :null}
      </div>
    );
  }
}

export default App;
