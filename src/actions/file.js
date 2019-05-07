import axios from 'axios';
import {SET_CURRENT_FILE,FETCH_FILES_START,FETCH_FILES_ERROR, FETCH_FILES_SUCCESS} from './types';

export const setCurrentFile=(file)=>{
    return{
        type:SET_CURRENT_FILE,
        payload:file
    }
}

export const fetchFilesStart=()=>{
    return{
        type:FETCH_FILES_START
    }
}

export const fetchFilesSuccess=(files)=>{
    return{
        type:FETCH_FILES_SUCCESS,
        payload:files
    }
}

export const fetchFilesError=(error)=>{
    return{
        type:FETCH_FILES_ERROR,
        payload:error
    }
}

export const fetchFiles = ()=>{
    // const res = await axios.get('/api/user_files');
    // dispatch({type:FETCH_FILES,payload:res.data})
    
    return async dispatch=>{
        dispatch(fetchFilesStart());
        try{
            const res = await axios.get('/api/user_files');
            dispatch(fetchFilesSuccess(res.data));
        }
        catch(error){
            dispatch(fetchFilesError(error));
        }
    }
}