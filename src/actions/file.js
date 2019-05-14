import axios from 'axios';
import {SET_CURRENT_FILE,FETCH_FILES_START,FETCH_FILES_ERROR, FETCH_FILES_SUCCESS,DELETE_FILE_START,DELETE_FILE_ERROR,DELETE_FILE_SUCCESS} from './types';

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

export const deleteFileStart=(fileid)=>{
    return{
        type:DELETE_FILE_START,
        payload:fileid
    }
}

export const deleteFileError=(error)=>{
    return{
        type:DELETE_FILE_ERROR,
        payload:error
    }
}

export const deleteFileSuccess=()=>{
    return{
        type:DELETE_FILE_SUCCESS
    }
}

export const deleteByFileId=(fileid)=>{
    return async dispatch =>{
        dispatch(deleteFileStart(fileid));
        try{
            const res = await axios.delete('/api/file',{
            params:{
                fileId:fileid
            }});
            
            dispatch(deleteFileSuccess(res));
            dispatch(fetchFiles());
        }
        catch(error){
            dispatch(deleteFileError(deleteFileError()));
        }
    }
}