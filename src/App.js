import React, { Component } from 'react';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/';

import './App.css';

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
          {/* <ProtectedRoute path="/form" component={Form}/> */}
          <Route  path="/form" render={()=>(this.props.choicesDone?<Redirect to={'/'}/>:<Form/>)}></Route>
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
    currentQuestion:choices.currentQuestion,
    choicesDone:choices.choicesDone
  }
}

export default connect(mapStateToProps,actions)(App);
