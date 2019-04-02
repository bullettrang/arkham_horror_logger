import {SET_CHOICES,SET_QUESTION,SET_QUESTIONS,NEXT_QUESTION} from '../actions/types';
import {data} from '../constants/constants';
const initialState={
    currentQuestion:null,
    questions:[],
    qIdx:null,
    totalQuestions:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_QUESTIONS:
            return{
                ...state,
                questions:data[action.payload].questions,
                totalQuestions:data[action.payload].total_questions
            }
        case NEXT_QUESTION:
            if(state.qIdx-1 === state.questions.totalQuestions) return state;       //reached last question
            
            return{
                ...state,
                qIdx:state.qIdx+1
            }
        case SET_QUESTION:
            if(state.qIdx===null || state.qIdx===state.totalQuestions){          //very first question
                console.log('is null ');
                return{
                    ...state,
                    qIdx:0,
                    currentQuestion:state.questions[0]
                };
            }
            const nextQuestionIdx = state.qIdx+1;

            
            if(nextQuestionIdx  === state.questions.totalQuestions){
                console.log('reached last question')
                return state;       //reached last question
            }
            return{
                ...state,
                qIdx:nextQuestionIdx,
                currentQuestion:state.questions[nextQuestionIdx]
            }

        default:
            return state;
    }
}