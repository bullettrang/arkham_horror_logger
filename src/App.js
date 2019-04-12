import React, { Component } from 'react';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import Header from './Components/Header';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/';

import './App.css';

const Dashboard =()=>{
  return(
    <div style={{textAlign:'center'}}>
      DASHBOARD, PLZ LOGIN
    </div>
  );
}

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

  componentDidMount(){
    this.props.fetchUser();
  }

  
  render() {
    return (
      <div className="App" >
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/campaign"  component={CampaignMenu}></Route>
          <Route path="/scenario" component={ScenarioMenu}></Route>
          <Route  path="/form" render={()=>(this.props.choicesDone?<Redirect to={'/campaign'}/>:<Form/>)}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({choices,mode}) => {
  return {
    answers: choices.answers,
    selectedCampaign:choices.selectedCampaign,
    selectedScenario:choices.selectedScenario,
    currentQuestion:choices.currentQuestion,
    choicesDone:choices.choicesDone,
    mode:mode.currentMode
  }
}

export default connect(mapStateToProps,actions)(App);
