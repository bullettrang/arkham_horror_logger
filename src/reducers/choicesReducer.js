import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO,SET_QUESTION,SET_QUESTIONS,NEXT_QUESTION,RESET_FORM,FINISHED_FORM,NEW_FORM} from '../actions/types';
import {data} from '../constants/constants';

const initialState = {
    answers: [],
    selectedCampaign:null,
    selectedScenario:null,
    currentQuestion:null,
    questions:[],
    qIdx:null,
    totalQuestions:null,
    choicesDone:false
  }
export default (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_ANSWER:
            return {
                ...state,
                answers:[...state.answers,action.payload]
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
            return{
                ...state,
                questions:data[action.payload].questions,
                totalQuestions:data[action.payload].total_questions,
                choicesDone:false
            }
        case NEXT_QUESTION:
            if(state.qIdx-1 === state.questions.totalQuestions) return state;       //reached last question
            
            return{
                ...state,
                qIdx:state.qIdx+1
            }
        case SET_QUESTION:
            if(state.qIdx===null){          //very first question
                return{
                    ...state,
                    qIdx:0,
                    currentQuestion:state.questions[0]
                };
            }
            const nextQuestionIdx = state.qIdx+1;
            // if(state.questions[state.qIdx].hasOwnProperty("askAgain")){
            //     console.log('inside reducer, you should skip question');
            // }

            if(nextQuestionIdx  === state.totalQuestions){
                console.log('in reducer, last question')
                return state;       //reached last question
            }
            else{
                return{
                    ...state,
                    qIdx:nextQuestionIdx,
                    currentQuestion:state.questions[nextQuestionIdx]
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
                choicesDone:true
            }
        
        case RESET_FORM:
            return{
                ...state,
                qIdx:null,
                currentQuestion:null,
                selectedCampaign:null,
                selectedScenario:null,
                totalQuestions:null,
                questions:[],
                //todo reset answers and submitting them to db
            }    
        default:
            return state;
    }
}