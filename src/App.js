import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import {Form} from './Components/Forms/Form';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import {data} from './constants/constants';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedCampaign:null,
      selectedScenario:null,
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
    //select scenario, load current question
    this.setState({selectedScenario:scenarioTitle },()=>this.setQuestionHandler(this.state.selectedScenario))
  }

  setQuestionHandler=(sc)=>{
   let {questions} =data[sc];
    if(this.state.selectedScenario.length>0){
      this.setState({currentQuestion:questions[this.state.currentQuestionIdx]});
    }
  }

  submitAnswerHandler=(question,answer)=>{
    //save answer
    //move to next question
    //this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    this.setState(prevState=>({userAnswers:prevState.userAnswers.set(question,answer)}));
  }
  
  render() {
    const {currentQuestion} = this.state;
    return (
      <div className="App">
        {this.state.selectedCampaign? null:<CampaignMenu campaignSelectionHandler={this.campaignSelectionHandler}/>}
        {this.state.selectedScenario?null:<ScenarioMenu 
                                              campaignTitle={this.state.selectedCampaign} 
                                              selectionHandler={this.scenarioSelectionHandler} 
                                              setQuestionHandler={this.setQuestionHandler}
                                              /> }
        {this.state.currentQuestion? <Form
                                        question={currentQuestion}
                                        scenarioTitle={this.state.selectedScenario} 
                                        submit={this.submitAnswerHandler}/>
                                        :null}
      </div>
    );
  }
}

export default App;
