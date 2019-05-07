import {FETCH_RESULTS_START,FETCH_RESULTS_SUCCESS,FETCH_RESULTS_FAIL} from '../actions/types';
const initialState={
    results:[],
    error:null
}


export default (state=initialState,action)=>{
    switch(action.type){

        // case FETCH_RESULTS:
        //     return{
        //         ...state,
        //         results:action.payload
        //     }

        case FETCH_RESULTS_START:
            return state;
        
        case FETCH_RESULTS_SUCCESS:
            return{
                ...state,
                results:action.payload
            }
        case FETCH_RESULTS_FAIL:
            return{
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}