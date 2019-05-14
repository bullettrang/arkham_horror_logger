import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO,SET_QUESTION,SET_QUESTIONS,RESET_FORM,FINISHED_FORM,NEW_FORM,FILTER_QUESTIONS,SET_ANSWERS} from '../actions/types';
import {DATA} from '../constants/constants';

const initialState = {
    answers: [],
    selectedCampaign:null,
    selectedScenario:null,
    currentQuestion:null,
    questions:[],
    qIdx:null,
    totalQuestions:null,
    choicesDone:false,
    completedScenarios:[]
  }

export default (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_ANSWER:
            //need to update properly
            let questionID=Object.keys(action.payload)[0];   
            const index = state.answers.findIndex(ans => ans.hasOwnProperty(questionID));
            if(index===-1){
                return{
                    ...state,
                    answers:[...state.answers,action.payload]
                }
            }
            return {
                ...state,
                answers:[ ...state.answers.slice(0,index),
                        {...state.answers[index],
                            [questionID]:action.payload[questionID]},
                            ...state.answers.slice(index+1)]
            }
        
        case SET_CAMPAIGN:
            return{
                ...state,
                selectedCampaign:action.payload
            }

        case SET_SCENARIO:
            return{
                ...state,
                selectedScenario:action.payload
            }

        case SET_QUESTIONS:
             let finalQuestions=[];

                finalQuestions= getFinalQuestions(state.answers,action);            //we decide questions to ask based on previous choices to other scenarios

                return{
                    ...state,
                    questions:finalQuestions,
                    totalQuestions:finalQuestions.length,
                    choicesDone:false
                }
        case SET_ANSWERS: 
                return{
                    ...state,
                    answers:action.payload
                }
        
        case FILTER_QUESTIONS:
                if(state.currentQuestion.hasOwnProperty('relatedQuestions')){
                    let newQuestions=filterOutQuestions(state,action);
                    return{
                        ...state,
                        questions:newQuestions
                    }
                }
                return state;

        case SET_QUESTION:
            if(state.qIdx===null){          //very first question
                return{
                    ...state,
                    qIdx:0,
                    currentQuestion:state.questions[0]
                };
            }

            let newQuestionIdx = getNextQuestionIdx(state);
            
            
            if(isEndOfQuestions(newQuestionIdx,state)){      
                const finishedScenario = state.selectedScenario;
                let arrOfScenarios= state.completedScenarios;

                return {                                            //reset
                    ...state,
                    choicesDone:true,
                    selectedCampaign:null,
                    selectedScenario:null,
                    qIdx:null,
                    totalQuestions:null,
                    questions:[],
                    currentQuestion:null,
                    completedScenarios:[...arrOfScenarios,finishedScenario]
                }
            }//GENERAL MOVE TO NEXT QUESTION ON LIST
            else{
                return{
                    ...state,
                    qIdx:newQuestionIdx,
                    currentQuestion:state.questions[newQuestionIdx],
                }
            }

        case NEW_FORM:
            return{
                ...state,
                choicesDone:false
            }

        case FINISHED_FORM:
            return{
                ...state,
                choicesDone:true,
            }
        
        case RESET_FORM:
            return{
                ...state,
                qIdx:null,
                currentQuestion:null,
                selectedCampaign:null,
                selectedScenario:null,
                totalQuestions:null,
                questions:[]
            }

        default:
            return state;
    }
}

//HELPER FUNCTIONS

/* userAnswers: Array
*action: object
* This is for player choices that affect q's between scenarios
 */
const getFinalQuestions=(userAnswers,action)=>{
    let finalQuestions=[];
            let nonRecurringQuestions = DATA[action.payload].questions.filter(q=>!q.hasOwnProperty("askAgain"));
            let recurringQuestions = DATA[action.payload].questions.filter(q=>q.hasOwnProperty("askAgain"));
            let mymap = new Map();
            for(let ele of userAnswers){
                for(let key in ele){
                    mymap.set(key,ele[key]);
                }
            }
            let remainingRecurring=recurringQuestions.filter(e=>  mymap.get(e.id) !==0 );
            finalQuestions=remainingRecurring.concat(nonRecurringQuestions);
           finalQuestions.sort((q1,q2)=>{   //sort by id
               if(q1.id < q2.id){
                   return -1;
               }
               else if (q1.id > q2.id){
                   return 1;
               }
               return 0;
           })
           return finalQuestions;
}

//filter out questions based on user answers to previous
//inputs: state, action (action.payload is questionId:answer)
//returns new array of questions
const filterOutQuestions=(state,action)=>{
    
    const {questions,currentQuestion}=state;
    const {payload}=action
    let newQuestions = questions;
    let answerToCurrentQuestion= payload;
    let relatedQuestionIds = Object.keys(currentQuestion.relatedQuestions);
    let keyOfQ = Object.keys(payload);

        for(let id of relatedQuestionIds){
                if(currentQuestion.relatedQuestions[id]!==answerToCurrentQuestion[keyOfQ]){
                    for(let question of newQuestions){
                        if(question.id===id){
                            question.skipQuestion=true
                        }
                    }
                }
                else{
                    for(let question of newQuestions){
                        if(question.id===id){
                            question.skipQuestion=false
                        }
                    }
                }
            }
            return newQuestions;
}


const getNextQuestionIdx=(state)=>{
    const {qIdx,totalQuestions,questions}=state;
    let newQuestionIdx = qIdx+1;

    while(newQuestionIdx<totalQuestions &&  questions[newQuestionIdx].skipQuestion ){ //skip flagged questions
        newQuestionIdx++;
    }

    return newQuestionIdx;
}

//parameters: number (index of new question)
//            totalQuestions
//returns boolean å
const isEndOfQuestions=(newQuestionIdx,state)=>{
   return newQuestionIdx  === state.totalQuestions
}