import React, { Component } from 'react';
import {CampaignMenu} from './Components/Campaign/CampaignMenu';
import ScenarioMenu from './Components/Scenarios/ScenarioMenu';
import {Form} from './Components/Forms/Form';
import {CheckBoxesContainer} from './Components/Forms/CheckBoxes/CheckBoxesContainer';
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
        <CheckBoxesContainer/>
      </div>
    );
  }
}

export default App;
