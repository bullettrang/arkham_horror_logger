import React,{Component} from 'react';


import SubmitButton from '../Forms/Button/SubmitButton';
import Grid from '../Grid';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {Redirect } from "react-router-dom";
import './CampaignMenu.css';
//shows menu of campaigns

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
        this.props.setCampaign(this.state.selection);
    }

    selectHandler=(e)=>{
        this.setState({selection:e});
    }

    render(){
      const {selectedCampaign} = this.props;

      if(selectedCampaign!==null){    //if campaign was submitted, we will navigate to scenario menu
        return <Redirect to={'/scenario'}/>;
      }


      
        return(
          <div className="campaign-menu__wrapper">
            <div className="campaign-menu__main">
            <div className="campaign-menu__header">
                  <h1 className="campaign-menu__header--title">Select a Campaign</h1>
              </div> 
              <form className="campaign-menu_main--form" onSubmit={this.submitHandler}>
              <Grid current={this.state.selection} campaigns={this.state.campaign} clicked={this.selectHandler}/>
              <h1 className="campaign-menu_main--form--header">{this.state.selection}</h1>
                  <SubmitButton/>
              </form>
            </div>
          </div> 
          );
      
    }
}

const mapStateToProps=({choices})=>{
  return{
    selectedCampaign:choices.selectedCampaign
  }
  
}

export default connect(mapStateToProps,actions)(CampaignMenu);