import {CREATE_FILE_START,CREATE_FILE_SUCCESS,SET_CURRENT_FILE,CREATE_FILE_ERROR,SUBMIT_ANSWERS_START,SUBMIT_ANSWERS_SUCCESS,SUBMIT_ANSWERS_ERROR,FETCH_FILES_START,FETCH_FILES_ERROR,FETCH_FILES_SUCCESS,DELETE_FILE_ERROR,DELETE_FILE_START,DELETE_FILE_SUCCESS} from '../actions/types';
const initialState={
    files:[],
    answers:[],
    currentFile:null,
    error:null
}

export default(state=initialState,action)=>{
    switch(action.type){
        case CREATE_FILE_START:
            return state;
        case CREATE_FILE_SUCCESS:

            return {
                ...state,
                files:[action.payload,...state.files,]
            }
        case SET_CURRENT_FILE:
            return{
                ...state,
                currentFile:action.payload
            }
        case CREATE_FILE_ERROR:
            return null;
        
        case FETCH_FILES_START:
            return state;
        case FETCH_FILES_SUCCESS:
            return{
                ...state,
                files:action.payload
            }
        case FETCH_FILES_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case SUBMIT_ANSWERS_START:
            return {
                ...state
            }
        case DELETE_FILE_ERROR:
            return  {
                ...state,
                error:action.payload
            }
        case DELETE_FILE_START:
            return state;
        case DELETE_FILE_SUCCESS:
            return state;

        case SUBMIT_ANSWERS_SUCCESS:
            const{scenarioTitle}=action.payload;
            const index = state.answers.findIndex(ans=>ans.scenarioTitle===scenarioTitle)
            if(index===-1){
                return {
                    ...state,
                    answers:[...state.answers,action.payload]
                }
            }
            else{
                let newArr = state.answers.slice(0);
                newArr[index]=action.payload;
                return{
                    ...state,
                    answers:newArr
                }
            }

        case SUBMIT_ANSWERS_ERROR:
            return state;
        default:
            return state;
    }
} 