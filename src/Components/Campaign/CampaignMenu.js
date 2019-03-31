import React,{Component} from 'react';

import DropDown from '../Menu/DropDown';
import SubmitButton from '../Forms/Button/SubmitButton';
import NOZ_IMG from '../../Assets/CAMPAIGN_COVER/NOZ_form_img.png';
import DWL_IMG from '../../Assets/CAMPAIGN_COVER/DWL_form_img.jpg';
import {connect} from 'react-redux';
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
            selection:''
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
        this.props.campaignSelectionHandler(this.state.selection);
    }

    selectHandler=(e)=>{
        this.setState({selection:e.target.value});
    }

    render(){
      const {selectedCampaign} = this.props;
      console.log(this.props);

      if(selectedCampaign!==null){
        console.log('DONT DISPLAY CAMPAIGN MENU')
        return null;
      }
      
        return(
          <div className="campaign-menu__wrapper">
            <div className="campaign-menu__main">
            <div className="campaign-menu__header">
                  <h1 className="campaign-menu__header--title">Select a Campaign</h1>
              </div>
              <div className="campaign-menu__card" >
                <img className="campaign-menu__card--image" src={DWL_IMG}/>
                <span className="campaign-menu__card--title">{this.state.selection}</span>
              </div>

              <form className="campaign-menu_main--form" onSubmit={this.submitHandler}>
                  <DropDown
                      title={"Select Campaign"}
                      list={this.state.campaign}
                      resetThenSet={this.resetThenSet}
                      mouseEnter={this.props.modalOn} 
                      mouseLeave={this.props.modalOff}
                  />
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

export default connect(mapStateToProps,null)(CampaignMenu);