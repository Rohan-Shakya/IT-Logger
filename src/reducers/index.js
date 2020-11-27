import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './teachReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
