import {RESET_FORM,FINISHED_FORM,FILTER_QUESTIONS,SET_MODE,FETCH_USER,UPDATE_ANSWER} from './types';
import axios from 'axios';

export {
    createFile,
    setCampaign,
    submitAnswers,
    newForm
}from './campaign'

export {
    setQuestions,
    setQuestion,
    setScenario,
    setAnswers
}from './scenario';

export{
    setCurrentFile,
    fetchFiles,
    deleteByFileId
}from './file';

export {
    fetchResults
} from './result';

export const setAnswer =(obj)=>{
    return{
        type: UPDATE_ANSWER,
        payload:obj
    }
}


export const filterQuestions =(obj)=>{
    return{
        type: FILTER_QUESTIONS,
        payload:obj
    }
}


export const resetAfterSubmit =()=>{
    return{
        type:RESET_FORM
    }
}

export const finishedForm =()=>{
    return{
        type:FINISHED_FORM
    }
}


export const setMode =(mode)=>{

    return{
        type:SET_MODE,
        payload:mode
    }
}

export const fetchUser =()=> async dispatch=>{
    const res= await axios.get('/api/current_user');

    dispatch({type:FETCH_USER,payload:res.data});
}










