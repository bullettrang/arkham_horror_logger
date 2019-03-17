import React,{Component} from 'react';
import {data} from '../../../constants/constants';
import {CheckBox} from './CheckBox';
import "./CheckBoxesContainer.css";
export class CheckBoxesContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            checkedItems:new Map(),
            decisions:[]
        }
    }


    handleChange=(e)=> {
        const item = e.target.value;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    handleSubmit=(e)=>{
        let choices=[];
        e.preventDefault();
        choices = data["The Midnight Masks"].questions[3].choices.filter(item=>{
            return this.state.checkedItems.get(item.description);
        }).map(e=>e.description);
        this.setState({decisions:choices});

        //SEND DATA BACK TO STORE
    }

    render(){
        return(
            <div className="CheckBoxes__wrapper">
            <form onSubmit={this.handleSubmit} >
                <React.Fragment>
                {
                data["The Midnight Masks"].questions[3].choices.map(item => (
                    <label key={item.key}>
                    {item.description}
                    <CheckBox 
                        description={item.description} 
                        checked={this.state.checkedItems.get(item.description)} 
                        onChange={this.handleChange} 
                        />
                    </label>
                ))
                }
            </React.Fragment>
            <button>SUBMIT</button>
          </form>
          </div>
        )
    }
}