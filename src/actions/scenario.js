import{SET_SCENARIO,SET_QUESTIONS,SET_QUESTION,SET_ANSWERS} from '../actions/types';
//setScenario
//setQuestions
//setQuestion
//setAnswers


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

export const setScenario =(obj)=>{
    return{
        type: SET_SCENARIO,
        payload:obj
    }
}

export const setAnswers =(answers)=>{
    return{
        type:SET_ANSWERS,
        payload:answers
    }
}
