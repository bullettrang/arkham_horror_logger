import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedCampaign:""
    }
  }

  campaignSelectionHandler=(campaign)=>{
    this.setState({selectedCampaign:campaign});
  }
  
  render() {

    return (
      <div className="App">
        <CampaignMenu campaignSelectionHandler={this.campaignSelectionHandler}/>
        {this.state.selectedCampaign.length>0?<ScenarioMenu campaignTitle={this.state.selectedCampaign}/>:null}
      </div>
    );
  }
}

export default App;
