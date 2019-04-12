import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO,SET_QUESTIONS,SET_QUESTION,RESET_FORM,FINISHED_FORM,NEW_FORM,FILTER_QUESTIONS,SET_MODE,FETCH_USER} from './types';
import axios from 'axios';
export const setAnswer =(obj)=>{
    return{
        type: UPDATE_ANSWER,
        payload:obj
    }
}

export const setCampaign =(obj)=>{
    return{
        type: SET_CAMPAIGN,
        payload:obj
    }
}

export const setScenario =(obj)=>{
    return{
        type: SET_SCENARIO,
        payload:obj
    }
}

export const setQuestions =(obj)=>{
    return{
        type: SET_QUESTIONS,
        payload:obj
    }
}

export const setQuestion =()=>{
    return{
        type: SET_QUESTION
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

export const newForm =()=>{
    return{
        type:NEW_FORM
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

