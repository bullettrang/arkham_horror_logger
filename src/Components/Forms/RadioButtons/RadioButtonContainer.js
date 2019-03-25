import React,{Component} from 'react';
import {RadioButtons} from './RadioButtons'; 
import './RadioButtonContainer.css';
export class RadioButtonContainer extends Component{

    state={
        current:null
    }

    handleChange=(e)=>{
        this.setState({current:parseInt(e.target.value)});
    }

    handleSubmit=(e)=>{
        const {question} =this.props; 
        e.preventDefault();
        //for radio input, there must be a user selection to submit
        if(this.state.current===null){
            return;
        }
        this.props.submit(question.id,this.state.current);
    }

    render(){
        const {choices,question}=this.props;
        return(
        <div className="Radio__wrapper">
            <form className="Radio__userInputs" onSubmit={this.handleSubmit}>
                <div className="Radio__form--choices">
                    <RadioButtons 
                        handleChange={this.handleChange} 
                        type={question.type} 
                        choices={choices} 
                        current={this.state.current}                        
                    />
                </div>
                <div className="Radio__form--submission">
                    <button>Submit</button>
                </div>
            </form>
        </div>
        );
    }
}