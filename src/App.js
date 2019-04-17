import React, { Component } from 'react';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import Header from './Components/Header/Header';
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

  componentDidMount(){
    if(!this.props.auth)
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

const mapStateToProps = ({choices,auth}) => {
  return {
    choicesDone:choices.choicesDone,
    auth
  }
}

export default connect(mapStateToProps,actions)(App);
