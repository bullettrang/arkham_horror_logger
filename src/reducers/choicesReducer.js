import {UPDATE_ANSWER,SET_CAMPAIGN,SET_SCENARIO,SET_QUESTION,SET_QUESTIONS,NEXT_QUESTION,RESET_FORM,FINISHED_FORM,NEW_FORM} from '../actions/types';
import {data} from '../constants/constants';

const initialState = {
    answers: [],
    selectedCampaign:null,
    selectedScenario:null,
    currentQuestion:null,
    questions:[],
    qIdx:null,
    totalQuestions:null,
    choicesDone:false
  }
export default (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_ANSWER:
        //need to update properly
        let questionID=Object.keys(action.payload)[0];   
        console.log(questionID);
        const index = state.answers.findIndex(ans => ans[questionID]);

        
        if(index===-1){
            return{
                ...state,
                answers:[...state.answers,action.payload]
            }
        }

        return {
            ...state,
            answers:[ ...state.answers.slice(0,index),{...state.answers[index],[questionID]:action.payload[questionID]},...state.answers.slice(index+1)]
        }
        
        case SET_CAMPAIGN:
            return{
                ...state,
                selectedCampaign:action.payload
            }
        case SET_SCENARIO:
            return{
                ...state,
                selectedScenario:action.payload
            }
        case SET_QUESTIONS://TODO, FIND AWAY TO IMPLEMENT RECURRING QUESTIONS
             let finalQuestions=[];

                finalQuestions= getFinalQuestions(state.answers,action);

                return{
                    ...state,
                    questions:finalQuestions,
                    totalQuestions:finalQuestions.length,
                    choicesDone:false
                
            }

        case NEXT_QUESTION:
            if(state.qIdx-1 === state.questions.totalQuestions) return state;       //reached last question
            
            return{
                ...state,
                qIdx:state.qIdx+1
            }
        case SET_QUESTION:
            if(state.qIdx===null){          //very first question
                return{
                    ...state,
                    qIdx:0,
                    currentQuestion:state.questions[0]
                };
            }
            let nextQuestionIdx = state.qIdx+1;
            let askAgain;
            if(nextQuestionIdx  === state.totalQuestions){
                
                return state;       //all questions answered, 
            }
            else{
                // const questionToCheck= state.questions[nextQuestionIdx];        //we need to check if this question should be asked 
                // if(questionToCheck.hasOwnProperty('askAgain')){                 //special case for recurring questions
                //     const answerToCheck = state.answers.filter((e)=> e.hasOwnProperty(questionToCheck.id));
                //     if(answerToCheck.length===0){           //do we ask the ghoul question again
                //         askAgain = questionToCheck.askAgain;
                //     }
                //     else{
                //         if(answerToCheck[questionToCheck.id]===0){          //did user already defeat ghoul priest?
                //             askAgain = !questionToCheck.askAgain;
                //             nextQuestionIdx++;          //MAYBE NEED TO HANDLE IF RECURRING QUESTION IS LAST QUESTION ON FORM
                //             if(nextQuestionIdx=== state.totalQuestions)
                //             {
                //                 return state;
                //             }
                //             return{
                //                 ...state,
                //                 currentQuestion:{
                //                     ...state.questions[nextQuestionIdx],
                //                     [askAgain]:askAgain
                //                 },
                //                 qIdx:nextQuestionIdx
                //             }
                //         }
                //     }
                // }
                return{
                    ...state,
                    qIdx:nextQuestionIdx,
                    currentQuestion:state.questions[nextQuestionIdx],
                }
            }

        case NEW_FORM:
            return{
                ...state,
                choicesDone:false
            }

        case FINISHED_FORM:
            return{
                ...state,
                choicesDone:true
            }
        
        case RESET_FORM:
            return{
                ...state,
                qIdx:null,
                currentQuestion:null,
                selectedCampaign:null,
                selectedScenario:null,
                totalQuestions:null,
                questions:[],
                //todo reset answers and submitting them to db
            }    
        default:
            return state;
    }
}

//HELPER FUNCTIONS

/* userAnswers: Array
*action: object
 */
const getFinalQuestions=(userAnswers,action)=>{
    let finalQuestions=[];
            let nonRecurringQuestions = data[action.payload].questions.filter(q=>!q.hasOwnProperty("askAgain"));
            let recurringQuestions = data[action.payload].questions.filter(q=>q.hasOwnProperty("askAgain"));
            let mymap = new Map();
            for(let ele of userAnswers){
                for(let key in ele){
                    mymap.set(key,ele[key]);
                }
            }
            let remainingRecurring=recurringQuestions.filter(e=>  mymap.get(e.id) !==0 );
            console.log('remainingRecurring ',remainingRecurring);
            finalQuestions=remainingRecurring.concat(nonRecurringQuestions);
           console.log('finalQuestions ',finalQuestions);
           finalQuestions.sort((q1,q2)=>{   //sort by id
               if(q1.id < q2.id){
                   return -1;
               }
               else if (q1.id > q2.id){
                   return 1;
               }
               return 0;
           })
           return finalQuestions;
}