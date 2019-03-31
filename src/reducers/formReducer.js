import {SET_CHOICES,SET_QUESTION,SET_QUESTIONS} from '../actions/types';
import {data} from '../constants/constants';
const initialState={
    currentQuestion:null,
    questions:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_QUESTIONS:
            return{
                ...state,
                questions:data[action.payload].questions
            }

        default:
            return state;
    }
}