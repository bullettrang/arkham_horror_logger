import React, { Component } from 'react';
import DashBoard from './Components/DashBoard/DashBoard';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/';
import './App.css';


class App extends Component {

  componentDidMount(){
    
      this.props.fetchUser();
  }

  
  render() {
    return (
      <div className="App" >
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={DashBoard}></Route>
          <Route path="/campaign"  render={()=>this.props.auth?  <CampaignMenu/>:<Redirect to={'/'}/>}></Route>
          <Route path="/scenario" render={()=>this.props.auth?  <ScenarioMenu/>:<Redirect to={'/'}/>}></Route>
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
