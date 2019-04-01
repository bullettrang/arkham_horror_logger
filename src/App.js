import React, { Component } from 'react';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import {Form} from './Components/Forms/Form';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/';
import RuleBookArt from './Assets/Rulebook_art.jpg';
import './App.css';
import {data} from './constants/constants';

import shortid from "shortid";  //for animations



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedScenario:null,
      currentQuestion:null,
      currentQuestionIdx:0,
      totalQuestions:null,
      userAnswers:new Map(),
      showCampaign:true,
      showScenario:false,
      showModal:false
    }
  }

  campaignSelectionHandler=(campaign)=>{

    this.props.setCampaign(campaign);
  }

  scenarioSelectionHandler=(scenarioTitle)=>{
    //select scenario, load current question
    // this.setState({selectedScenario:scenarioTitle,showScenario:!this.state.showScenario },()=>this.setQuestionHandler(this.state.selectedScenario))
    this.props.setScenario(scenarioTitle);
  }

  setQuestionHandler=(sc)=>{
   let {questions} =data[sc];
    // if(this.state.selectedScenario.length>0){
    //   this.setState({currentQuestion:questions[this.state.currentQuestionIdx]});
      
    // }
    this.props.setQuestions(questions);
    this.props.setQuestion();
  }

  submitAnswerHandler=(question,answer)=>{
    this.setState(prevState=>({userAnswers:prevState.userAnswers.set(question,answer)}));

    let obj ={
      [question]:answer
    };

    this.props.setAnswer(obj);
    this.props.setQuestion();
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

  modalOn=()=>{
    this.setState({showModal:true});
  }

  modalOff=()=>{
    this.setState({showModal:false});
  }

  /**this is for generating ids for animations */
  getId = () => {
    const id = shortid.generate();
    return id;
  };
  
  render() {
    const {showModal} = this.state;
    const {selectedCampaign,selectedScenario,currentQuestion} = this.props;

    return (
      <div className="App" >
        <div className="App__header">
          <h1 className="App__header--title">ARKHAM HORROR LOGGER</h1>
        </div>
        <br/>
        <br/>
        <br/>
        <CampaignMenu
          modalOn ={this.modalOn}
          modalOff={this.modalOff}  
          campaignSelectionHandler={this.campaignSelectionHandler}/>                           
              <ScenarioMenu 
                campaignTitle={selectedCampaign} 
                selectionHandler={this.scenarioSelectionHandler} 
                setQuestionHandler={this.setQuestionHandler}
              />
                                  
        {currentQuestion? <Form
                                        question={currentQuestion}
                                        getQuestionKey={this.getId}
                                        scenarioTitle={selectedScenario}
                                        submit={this.submitAnswerHandler}/>
                                        :null}
      </div>
    );
  }
}

const mapStateToProps = ({choices,form}) => {
  return {
    answers: choices.answers,
    selectedCampaign:choices.selectedCampaign,
    selectedScenario:choices.selectedScenario,
    currentQuestion:form.currentQuestion
  }
}

export default connect(mapStateToProps,actions)(App);
