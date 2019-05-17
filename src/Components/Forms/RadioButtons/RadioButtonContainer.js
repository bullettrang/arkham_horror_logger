import React,{Component} from 'react';
import {RadioButtons} from './RadioButtons/RadioButtons'; 

import SubmitButton from '../Button/SubmitButton';
import * as actions from '../../../actions/index';
import {connect} from 'react-redux';
import './RadioButtonContainer.css';
 class RadioButtonContainer extends Component{

    state={
        current:null
    }

    handleChange=(e)=>{
        this.setState({current:parseInt(e.target.value)});
    }

    handleSubmit=(e)=>{
        const {currentQuestion} =this.props; 
        e.preventDefault();
        if(this.state.current===null){
            return;
        }
        this.props.submit(currentQuestion,this.state.current);

    }

    render(){
        const {currentQuestion}=this.props;
        return(
        <div className="Radio__wrapper">
            <form className="Radio__userInputs" onSubmit={this.handleSubmit}>
                <div className="Radio__form--choices">
                    <RadioButtons 
                        handleChange={this.handleChange} 
                        type={currentQuestion.type} 
                        choices={currentQuestion.choices} 
                        current={this.state.current}                        
                    />
                </div>
                <div className="Radio__form--submission">
                    <SubmitButton title={"Submit"}/>
                </div>
            </form>
        </div>
        );
    }
}

const mapStateToProps=({choices})=>{
    return{
        currentQuestion:choices.currentQuestion
    }
}
export default connect(mapStateToProps,actions)(RadioButtonContainer);