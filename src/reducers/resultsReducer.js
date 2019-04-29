import {FETCH_RESULTS} from '../actions/types';
const initialState={
    scenarioTitle:'',
    answers:[],
    results:{}
}


export default (state=initialState,action)=>{
    switch(action.type){

        case FETCH_RESULTS:
            return{
                ...state,
                results:action.payload
            }


        default:
            return state;
    }
}