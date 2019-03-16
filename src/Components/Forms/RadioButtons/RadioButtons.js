import React,{Component} from 'react';
import {RadioButton} from './RadioButton';
import './RadioButtons.css';


//radio buttons not working
export class RadioButtons extends Component{
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
        return (
            <div className="Radio__wrapper">
            <form className="Radio__userInputs" onSubmit={this.handleSubmit}>
                <div className="Radio__form--choices">
                {this.props.choices.map((e)=>{
                        return( 
                            <RadioButton
                                key={e.description}
                                description={e.description} 
                                value={e.value} 
                                changed={this.handleChange}
                                checked={this.state.current===e.value}/>
                            );  
                })}
            </div>
            <div className="Radio__form--submission">
                <button>Submit</button>
            </div>
        </form>
        </div>
        );
        
    }

}