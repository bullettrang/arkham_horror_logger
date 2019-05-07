import React, { Component } from 'react';
import { Route, Redirect,Switch } from "react-router-dom";
import {connect} from 'react-redux';
import DashBoard from './Components/DashBoard/DashBoard';
import CampaignMenu from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import Form from './Components/Forms/Form';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';
import * as actions from './actions/index';
import './App.css';



class App extends Component {

  componentDidMount(){
      this.props.fetchUser();
  }

  
  render() {
    return (
      <div className="App" >
        <Header/>
          <Switch>
            <Route path="/" exact component={DashBoard}></Route>
            <Route path="/campaign"  render={()=>this.props.auth?  <CampaignMenu/>:<Redirect to={'/'}/>}></Route>
            <Route path="/scenario" render={()=>this.props.auth?  <ScenarioMenu/>:<Redirect to={'/'}/>}></Route>
            <Route path="/form" render={()=>(this.props.choicesDone?<Redirect to={'/campaign'}/>:<Form/>)}></Route>
            <Route path="/results" component={Result}></Route>
          </Switch>
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
