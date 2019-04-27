import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {assign} from 'lodash';
import CampaignForm from './CampaignForm/CampaignForm';
import * as actions from '../../actions/index';
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
            selection:null,
            toScenario:false
        }
    }

    componentDidMount(){
      this.props.setMode('campaign');

      if(this.props.choicesDone){
        const {completedScenarios,answers,currentFile} = this.props;
        const completedScenario = completedScenarios[completedScenarios.length-1];
        let obj= {scenarioTitle:completedScenario,answers:answers,_file:currentFile._id};//TODO: NEED TO CHANGE WHEN MULTIPLE FILES
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

    submitHandler= async (e)=>{
      const {setCampaign,createFile,files,completedScenarios,selectedCampaign}=this.props;
      const {selection}=this.state

        e.preventDefault();
        if(selection===null){
          return;
        }
        setCampaign(selection);
        const fileObj = assign({campaignTitle:'',completedScenarios:[]},{campaignTitle:selection,completedScenarios:completedScenarios});

        await createFile(fileObj);
        this.setState({toScenario:true})

        this.props.setMode('scenario');
    }

    selectHandler=(e)=>{
        this.setState({selection:e});
    }



    render(){
      
      const {selection,campaign,toScenario}=this.state;

      if(toScenario){    //if campaign was submitted, we will navigate to scenario menu
        return <Redirect to={'/scenario'}/>;
      }

        return(
          <div className="campaign-menu__wrapper" >
            <div className="campaign-menu__main">
                <h1 className="campaign-menu__header--title">Select a Campaign</h1>
                <CampaignForm
                  submitHandler={this.submitHandler}
                  selection={selection}
                  campaign={campaign}
                  selectHandler={this.selectHandler}
                />
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
    files:file.files,
    currentFile:file.currentFile
  }
  
}

export default connect(mapStateToProps,actions)(CampaignMenu);