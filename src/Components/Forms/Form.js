import React from 'react';
import {Question} from './Question/Question';
import RadioButtonContainer from './RadioButtons/RadioButtonContainer';
import  CheckBoxesContainer from './CheckBoxes/CheckBoxesContainer';
import * as actions from '../../actions/index';

import { connect } from 'react-redux';
import shortid from "shortid";  //for animations, need a new key prop to render each animation
import "./Form.css";

 const Form =(props)=>{

    let userForm=null;

    const getId = () => {
            const id = shortid.generate();
            return id;
        };

    const submitHandler =(question,ans)=>{
        const obj={[question.id]:ans}
        props.setAnswer(obj);
        //based on the user answer, we need to set the next appropriate question...
        props.filterQuestions(obj);
        props.setQuestion();

        if(props.totalQuestions -1===props.questionIdx){            //if we are submitting the last question, we reset
            props.finishedForm();
            props.resetAfterSubmit();
            this.props.setMode('campaign');
        }
    }

    const {scenarioTitle,question,questions, questionIdx,totalQuestions}=props;

    if(questionIdx===totalQuestions){
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
        <div key={getId()} className="Form-Wrapper">
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