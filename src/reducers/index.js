import {combineReducers} from 'redux';
import choicesReducer from './choicesReducer';
import formReducer from './formReducer';

export default combineReducers({
    choices:choicesReducer,
    form:formReducer
}
);
