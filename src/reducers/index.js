import {combineReducers} from 'redux';
import choicesReducer from './choicesReducer';
import modeReducer from './modeReducer';

export default combineReducers({
    choices:choicesReducer,
    mode:modeReducer
}
);
