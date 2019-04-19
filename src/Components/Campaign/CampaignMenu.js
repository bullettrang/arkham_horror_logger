import React,{Component} from 'react';
import CampaignForm from './CampaignForm/CampaignForm';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {assign} from 'lodash';
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
        const {completedScenarios,answers,file} = this.props;
        const completedScenario = completedScenarios[completedScenarios.length-1];
        let obj= {scenarioTitle:completedScenario,answers:answers,_file:file[0]._id};
        this.props.submitAnswers(obj);
        this.props.newForm();   //toggle choicesDone
      }
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
        const fileObj = assign({campaignTitle:'',completedScenarios:[]},{campaignTitle:this.state.selection,completedScenarios:this.props.completedScenarios});
        if(this.props.file.length===0){   //TODO: CHANGE THIS TO HANDLE MULTIPLE FILES
          this.props.createFile(fileObj)
        }
        
        this.props.setMode('scenario');
    }

    selectHandler=(e)=>{
        this.setState({selection:e});
    }

    render(){
      const {selectedCampaign} = this.props;
      const {selection,campaign}=this.state;

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

const mapStateToProps=({choices,auth,file})=>{
  return{
    selectedCampaign:choices.selectedCampaign,
    answers:choices.answers,
    completedScenarios:choices.completedScenarios,
    choicesDone:choices.choicesDone,
    auth,
    file:file
  }
  
}

export default connect(mapStateToProps,actions)(CampaignMenu);