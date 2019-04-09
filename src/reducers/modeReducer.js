import {SET_MODE} from '../actions/types';
const initialState = {
    currentMode:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_MODE:
            return {
                ...state,
                currentMode:action.payload
            }

        default:
            return state;
    }
}