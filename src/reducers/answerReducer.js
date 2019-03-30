import {UPDATE_ANSWER} from '../actions/types';


const initialState = {
    answers: [],
    selectedCampaign:null,
    selectedScenario:null,
    currentQuestion:null,
  }
export default (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_ANSWER:
            let answer =action.payload;
            return {
                ...state,
                answers:[...state.answers,action.payload]
            }
        default:
            return state;
    }
}