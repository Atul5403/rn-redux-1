import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectonReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
