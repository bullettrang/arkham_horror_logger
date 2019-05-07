import {SET_CAMPAIGN,CREATE_FILE_START,CREATE_FILE_ERROR,CREATE_FILE_SUCCESS,SUBMIT_ANSWERS_START, SUBMIT_ANSWERS_SUCCESS,SUBMIT_ANSWERS_ERROR,NEW_FORM} from './types';
import axios from 'axios';
import {fetchFiles,setCurrentFile} from './index';

export const setCampaign =(obj)=>{
    return{
        type: SET_CAMPAIGN,
        payload:obj
    }
}


export const createFileStart =()=>{
    return {
        type:CREATE_FILE_START
    }
}

export const createFileSuccess=(response)=>{
    return {
        type:CREATE_FILE_SUCCESS,
        payload:response
    }
}

export const createFileError=(error)=>{
    return{
        type:CREATE_FILE_ERROR
    }
}

export const createFile =(obj)=> {
    return async dispatch=>{
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(createFileStart());
        try{
           const response= await axios.post('/api/submitFile',obj);
           dispatch(createFileSuccess(response.data))
           dispatch(setCurrentFile(response.data));
        }
        catch(error){
            dispatch(createFileError(error));
        }
    }
}

export const submitAnswersStart =()=>{
    return {
        type:SUBMIT_ANSWERS_START
    }
}

export const submitAnswersSuccess=(obj)=>{
    return {
        type:SUBMIT_ANSWERS_SUCCESS,
        payload:obj
    }
}

export const errorHandle=(error)=>{
    return{
        type:SUBMIT_ANSWERS_ERROR
    }
}

export const submitAnswers =(obj)=> {
    return async dispatch=>{
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(submitAnswersStart());
        try{
            await axios.post('/api/submitChoices',obj);
           dispatch(submitAnswersSuccess(obj));
           await dispatch(fetchFiles());        //refresh files with recently completed scenarios
        }
        catch(error){
            dispatch(errorHandle(error));
        }
    }
}

export const newForm =()=>{
    return{
        type:NEW_FORM
    }
}
