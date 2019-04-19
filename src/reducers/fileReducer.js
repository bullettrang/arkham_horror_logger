import {CREATE_FILE_START,CREATE_FILE_SUCCESS,CREATE_FILE_ERROR,FETCH_FILES} from '../actions/types';



export default(state=[],action)=>{
    switch(action.type){
        case CREATE_FILE_START:
            return state;
        case CREATE_FILE_SUCCESS:
            return action.payload
        case CREATE_FILE_ERROR:
            return null;
        case FETCH_FILES:
            return action.payload || false;
        default:
            return state;
    }
} 