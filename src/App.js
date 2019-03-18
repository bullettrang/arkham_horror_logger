import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
//import {Form} from './Components/Forms/Form';
//import {CheckBoxesContainer} from './Components/Forms/CheckBoxes/CheckBoxesContainer';
import './App.css';
//import {data} from './constants/constants';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedCampaign:"",
      selectedScenario:"",
      currentQuestion:null,
      totalQuestions:null,
      userAnswers:new Map()
    }
  }

  campaignSelectionHandler=(campaign)=>{
    this.setState({selectedCampaign:campaign});
  }

  scenarioSelectionHandler=(scenario)=>{
    this.setState({selectedScenario:scenario})
  }
  
  render() {

    return (
      <div className="App">
        <CampaignMenu campaignSelectionHandler={this.campaignSelectionHandler}/>
        {this.state.selectedCampaign.length>0?<ScenarioMenu campaignTitle={this.state.selectedCampaign} selectionHandler={this.scenarioSelectionHandler} />:null}
        
      </div>
    );
  }
}

export default App;
