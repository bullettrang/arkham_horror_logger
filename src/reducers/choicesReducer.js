import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO} from '../actions/types';


const initialState = {
    answers: [],
    selectedCampaign:null,
    selectedScenario:null,
    currentQuestion:null,
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
        default:
            return state;
    }
}