import React from 'react';
import {Question} from './Question/Question';
import RadioButtonContainer from './RadioButtons/RadioButtonContainer';
import  CheckBoxesContainer from './CheckBoxes/CheckBoxesContainer';
import * as actions from '../../actions/index';

import { connect } from 'react-redux';
import {Redirect } from "react-router-dom";
import shortid from "shortid";  //for animations
import "./Form.css";

 const Form =(props)=>{
    const {scenarioTitle,question,questions, questionIdx,totalQuestions,choicesDone}=props;
    let userForm=null;

    const getId = () => {
            const id = shortid.generate();
            return id;
        };

    const submitHandler =(question,ans)=>{
        const obj={[question.id]:ans}
        props.setAnswer(obj);
        props.setQuestion();

        if(props.totalQuestions -1===props.questionIdx){
            props.finishedForm();
            props.resetAfterSubmit();
        }
    }

    // if(campaignTitle===null){
    //     return <Redirect to={'/'}/>
    // }
    // if(scenarioTitle===null){
    //     return <Redirect to={'/scenario'}/>
    // }
    // if(question===null){     
    //     return null;
    // }

    if(questionIdx===totalQuestions){
        console.log('reached last question');
        return null;
    }
    else{
        if(question.type==='radio'){
            userForm=<RadioButtonContainer
                        question={question} 
                        scenarioTitle={scenarioTitle} 
                        choices={question.choices}
                        submit={submitHandler}
                    />
        }
        else if(  question.type==='checkbox'){
            userForm=<CheckBoxesContainer
                        scenarioTitle={scenarioTitle} 
                        submit={submitHandler}
                        questions={questions}
                    />
        }
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
        campaignTitle:choices.selectedCampaign,
        totalQuestions:choices.totalQuestions,
        questionIdx:choices.qIdx,
        choicesDone:choices.choicesDone
    }
}

export default connect(mapStateToProps,actions)(Form);