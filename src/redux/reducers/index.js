import {combineReducers} from 'redux';
import mathReducers from './mathReducer';

const rootReducer = combineReducers({
  mathState: mathReducers,
});

export default rootReducer;
