import {combineReducers} from 'redux';
import choicesReducer from './choicesReducer';
import modeReducer from './modeReducer';
import authReducer from './authReducer';
import fileReducer from './fileReducer';
export default combineReducers({
        choices:choicesReducer,
        mode:modeReducer,
        auth:authReducer,
        file:fileReducer
    }
);
