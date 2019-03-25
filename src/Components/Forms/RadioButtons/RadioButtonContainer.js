import React,{Component} from 'react';
import {RadioButtons} from './RadioButtons'; 
import './RadioButtonContainer.css';
import {data} from '../../../constants/constants';
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
        if(!this.state.current){
            return;
        }
        this.props.submit(question.id,this.state.current);
    }

    render(){
        const {scenarioTitle}=this.props;
        return(
        <div className="Radio__wrapper">
            <form className="Radio__userInputs" onSubmit={this.handleSubmit}>
                <div className="Radio__form--choices">
                    <RadioButtons 
                        handleChange={this.handleChange} 
                        type={data[scenarioTitle].questions[0].type} 
                        choices={data[scenarioTitle].questions[0].choices} 
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