import React,{Component} from 'react';

import DropDown from '../Menu/DropDown';
import SubmitButton from '../Forms/Button/SubmitButton';
import './CampaignMenu.css';
//shows menu of campaigns

export class CampaignMenu extends Component{ 

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
        this.props.campaignSelectionHandler(this.state.selection);
    }

    selectHandler=(e)=>{
        this.setState({selection:e.target.value});
    }
    render(){
        return(
            <div className="campaign-menu__wrapper">
              <div className="campaign-menu__main">
                <div className="campaign-menu__header">
                    <h1>Select a Campaign</h1>
                </div>
                <form onSubmit={this.submitHandler}>
                    <DropDown
                        title={"Select Campaign"}
                        list={this.state.campaign}
                        resetThenSet={this.resetThenSet}
                    />
                    <SubmitButton/>
                </form>
              </div>
            </div> 
            );
    }
}