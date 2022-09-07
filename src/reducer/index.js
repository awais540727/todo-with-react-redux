import TodoReducer from './reducer1';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  TodoReducer,
});
export default rootReducer;
