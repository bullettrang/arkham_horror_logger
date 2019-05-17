import React,{Component} from 'react';
import { connect} from 'react-redux';
import {CheckBoxes} from './CheckBoxes';
import SubmitButton from '../Button/SubmitButton';

import * as actions from '../../../actions/index';
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
        const {currentQuestion}=this.props;
        let choices=[];
        e.preventDefault();
        choices = currentQuestion.choices.filter(item=>{
            return this.state.checkedItems.get(item.description);
        }).map(e=>e.value);

        this.setState({decisions:choices},()=>this.props.submit(currentQuestion,this.state.decisions));
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
                <SubmitButton title={"Submit"}/>
            </form>
          </div>
        )
    }
}

const mapStateToProps=({choices})=>{
    return{
        currentQuestion:choices.currentQuestion,
        choices:choices.currentQuestion.choices
    }
}

export default connect(mapStateToProps,actions)(CheckBoxesContainer);