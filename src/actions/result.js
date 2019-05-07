import {FETCH_RESULTS_START,FETCH_RESULTS_SUCCESS,FETCH_RESULTS_FAIL} from './types';
import axios from 'axios';
export const fetchResultsStart=()=>{
    return{
        type:FETCH_RESULTS_START
    }
}
export const fetchResultsSuccess=(results)=>{
    return{
        type:FETCH_RESULTS_SUCCESS,
        payload:results
    }
}

export const fetchResultsFail=(error)=>{
    return{
        type:FETCH_RESULTS_FAIL,
        payload:error
    }
}
export const fetchResults = (campaignTitle)=>{

    return async dispatch=>{
        dispatch(fetchResultsStart());
        try{
            const res = await axios.get('/api/results',{
                params:{
                    campaign:campaignTitle
                }
            })
            dispatch(fetchResultsSuccess(res.data));
        }
        catch(error){
            dispatch(fetchResultsFail(error));
        }
    }
}