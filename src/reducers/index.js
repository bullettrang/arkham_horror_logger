import {combineReducers} from 'redux';
import choicesReducer from './choicesReducer';


export default combineReducers({
    choices:choicesReducer
}
);
