import notesReducer from './notesReducer';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  notes: notesReducer,
  filter: visibilityFilter
});

export default reducers;