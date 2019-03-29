import {UPDATE_ANSWER} from '../actions/types';

export default (state=[],action)=>{
    switch(action.type){
        case UPDATE_ANSWER:
            let answer =action.payload;
            return [...state,answer]
        default:
            return state;
    }
}