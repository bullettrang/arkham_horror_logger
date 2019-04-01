import React, { Component } from 'react';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
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
      showScenario:false
    }
  }


  
  render() {
    return (
      <div className="App" >
        <div className="App__header">
          <h1 className="App__header--title">ARKHAM HORROR LOGGER</h1>
        </div>
                       
        <BrowserRouter>
          <Route path="/" exact component={CampaignMenu}></Route>
          <Route path="/scenario" component={ScenarioMenu}></Route>
          <Route path="/form" component={Form}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({choices}) => {
  return {
    answers: choices.answers,
    selectedCampaign:choices.selectedCampaign,
    selectedScenario:choices.selectedScenario,
    currentQuestion:choices.currentQuestion
  }
}

export default connect(mapStateToProps,actions)(App);
