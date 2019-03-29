import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import {Form} from './Components/Forms/Form';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/';
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
      userAnswers:new Map(),
      showCampaign:true,
      showScenario:false
    }
  }

  campaignSelectionHandler=(campaign)=>{
    this.setState({selectedCampaign:campaign,showCampaign:false,showScenario:true});
  }

  scenarioSelectionHandler=(scenarioTitle)=>{
    //select scenario, load current question
    this.setState({selectedScenario:scenarioTitle,showScenario:!this.state.showScenario },()=>this.setQuestionHandler(this.state.selectedScenario))
  }

  setQuestionHandler=(sc)=>{
   let {questions} =data[sc];
    if(this.state.selectedScenario.length>0){
      this.setState({currentQuestion:questions[this.state.currentQuestionIdx]});
    }
  }

  submitAnswerHandler=(question,answer)=>{
    this.setState(prevState=>({userAnswers:prevState.userAnswers.set(question,answer)}));

    let obj ={
      [question]:answer
    };

    this.props.setAnswer(obj);
    this.setNextQuestion();
  }

  setNextQuestion=()=>{
    let {questions} = data[this.state.selectedScenario];
    //is this the last question of scenario?
    if(this.state.totalQuestions - 1 === this.state.currentQuestionIdx){
      console.log('submit all questions');
    }
    else{
      this.setState(prevState=>({currentQuestionIdx: prevState.currentQuestionIdx +1 }),
        ()=>this.setState({currentQuestion:questions[this.state.currentQuestionIdx]}))
    }
  }
  
  render() {
    const {currentQuestion,selectedCampaign,selectedScenario} = this.state;
    return (
      <div className="App ">
        {this.state.showCampaign? <CampaignMenu 
                                      campaignSelectionHandler={this.campaignSelectionHandler}/>:
                                    null}
        {this.state.showScenario?<ScenarioMenu 
                                      campaignTitle={selectedCampaign} 
                                      selectionHandler={this.scenarioSelectionHandler} 
                                      setQuestionHandler={this.setQuestionHandler}
                                      />:
                                  null }
        {this.state.currentQuestion? <Form
                                        question={currentQuestion}
                                        scenarioTitle={selectedScenario} 
                                        submit={this.submitAnswerHandler}/>
                                        :null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answer: state.answers
  }
}

export default connect(mapStateToProps,actions)(App);
