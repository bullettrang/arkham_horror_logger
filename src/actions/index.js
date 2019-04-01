import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO,SET_QUESTIONS,SET_QUESTION,NEXT_QUESTION} from './types';

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

export const setQuestion =(obj)=>{
    return{
        type: SET_QUESTION,
        payload:obj
    }
}

export const nextQuestion =()=>{
    return{
        type: NEXT_QUESTION
    }
}