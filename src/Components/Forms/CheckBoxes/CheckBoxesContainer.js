import React,{Component} from 'react';

import {CheckBoxes} from './CheckBoxes';
import SubmitButton from '../Button/SubmitButton';
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
        const {question}=this.props;
        let choices=[];
        e.preventDefault();
        choices = question.choices.filter(item=>{
            return this.state.checkedItems.get(item.description);
        }).map(e=>e.description);

        this.setState({decisions:choices},()=>this.props.submit(question.id,this.state.decisions));
    }

    render(){
        return(
            <div className="CheckBoxes__wrapper">
                <form onSubmit={this.handleSubmit} >
                    <CheckBoxes 
                        choices={this.props.choices}
                        handleChange={this.handleChange}
                        checkedItems={this.state.checkedItems}
                    />
                <SubmitButton/>
            </form>
          </div>
        )
    }
}