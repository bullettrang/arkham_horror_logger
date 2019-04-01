import React from 'react';
import {Question} from './Question/Question';
import {RadioButtonContainer} from './RadioButtons/RadioButtonContainer';
import {CheckBoxesContainer} from './CheckBoxes/CheckBoxesContainer';
import * as actions from '../../actions/index';

import { connect } from 'react-redux';
import {Redirect } from "react-router-dom";
import shortid from "shortid";  //for animations
import "./Form.css";

 const Form =(props)=>{
    const {scenarioTitle,question,questions,campaignTitle}=props;
    let userForm=null;

    const  getId = () => {
            const id = shortid.generate();
            return id;
        };

    if(campaignTitle===null){
        return <Redirect to={'/'}/>
    }
    if(scenarioTitle===null){
        return <Redirect to={'/scenario'}/>
    }
    if(question===null){     
        return null;
    }
    if(question.type==='radio'){
        userForm=<RadioButtonContainer
                    question={question} 
                    scenarioTitle={scenarioTitle} 
                    choices={question.choices}
                    submit={props.setAnswer}
                />
    }
    else{
        userForm=<CheckBoxesContainer
                    question={question}  
                    scenarioTitle={scenarioTitle} 
                    choices={question.choices}
                    submit={props.setAnswer}
                    questions={questions}
                />
    }

    
    return(
        <div className="Form-Wrapper">
            <Question qString={question.qString} getQuestionKey={()=>getId}/>
            {userForm}
        </div>
    )
}

const mapStateToProps=({choices})=>{
    return{
        question:choices.currentQuestion,
        questions:choices.questions,
        scenarioTitle:choices.selectedScenario,
        campaignTitle:choices.selectedCampaign
    }
}

export default connect(mapStateToProps,actions)(Form);