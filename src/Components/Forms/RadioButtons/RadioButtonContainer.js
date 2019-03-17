import React,{Component} from 'react';
import {RadioButtons} from './RadioButtons'; 
import './RadioButtonContainer.css';
import {data} from '../../../constants/constants';
export class RadioButtonContainer extends Component{

    state={
        current:null
    }

    handleChange=(e)=>{
        //console.log(e.target.value);
        this.setState({current:parseInt(e.target.value)});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        alert(this.state.current);
    }

    render(){
        return(
        <div className="Radio__wrapper">
            <form className="Radio__userInputs" onSubmit={this.handleSubmit}>
                <div className="Radio__form--choices">
                    <RadioButtons 
                        handleChange={this.handleChange} 
                        type={data['The Gathering'].questions[0].type} 
                        choices={data['The Gathering'].questions[0].choices} 
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