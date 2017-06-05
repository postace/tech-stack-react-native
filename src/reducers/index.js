import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Use combineReducers because we expect to work with mutiple reducer and it must be nicely, works
// well together
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});