import React,{Component} from 'react';
import CampaignForm from './CampaignForm';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {Redirect } from "react-router-dom";
import './CampaignMenu.css';

  class CampaignMenu extends Component{ 
    constructor(props){
        super(props);
        this.state={
            campaign:[
                {
                    id: 0,
                    title: 'Night of the Zealot',
                    selected: false,
                    key: 'campaign'
                  },
                  {
                    id: 1,
                    title: 'The Dunwich Legacy',
                    selected: false,
                    key: 'campaign'
                  },
                  {
                    id: 2,
                    title: 'The Path to Carcosa',
                    selected: false,
                    key: 'campaign'
                  },
                  {
                    id: 3,
                    title: 'The Forgotten Age',
                    selected: false,
                    key: 'campaign'
                  }
            ],
            selection:null
        }
    }

    componentDidMount(){
      
      this.props.setMode('campaign');
      
      if(this.props.choicesDone){
        console.log('submitting answers' );
        const {completedScenarios,answers} = this.props;
        let obj= {scenario:completedScenarios,choices:answers};
        this.props.submitAnswers(obj);
        this.props.newForm();   //restart the form
      }
    }

    postHandler = async  (obj)=>{
      await this.props.submitAnswers(obj);
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({selection:temp[id].title});
        this.setState({
          [key]: temp
        })
      }

    submitHandler=(e)=>{
        e.preventDefault();
        if(this.state.selection===''){
          return;
        }
      //TODO ADD SPECIAL LOGIC HANDLING FOR PROLOGUES, DUNWICH, ETC
        this.props.setCampaign(this.state.selection);
        this.props.setMode('scenario');
    }

    selectHandler=(e)=>{
        this.setState({selection:e});
    }

    render(){
      const {selectedCampaign} = this.props;
      const {selection,campaign}=this.state;
      
      if(!this.props.auth){   //ask user to login
        return <Redirect to={'/'}/>;
      }

      if(selectedCampaign!==null){    //if campaign was submitted, we will navigate to scenario menu
        return <Redirect to={'/scenario'}/>;
      }

        return(
          <div className="campaign-menu__wrapper">
            <div className="campaign-menu__main">
                <h1 className="campaign-menu__header--title">Select a Campaign</h1>
                <CampaignForm
                  submitHandler={this.submitHandler}
                  selection={selection}
                  campaign={campaign}
                  selectHandler={this.selectHandler}/>
            </div>
          </div> 
          );
      
    }
}

const mapStateToProps=({choices,auth})=>{
  return{
    selectedCampaign:choices.selectedCampaign,
    answers:choices.answers,
    completedScenarios:choices.completedScenarios,
    auth
  }
  
}

export default connect(mapStateToProps,actions)(CampaignMenu);