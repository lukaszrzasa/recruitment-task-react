import { combineReducers, createStore } from 'redux';
import listOrder from './listOrderReducer';
import listHeader from './listHeaderReducer';
import listItems from './listItemsReducer';
import filter from './filterResultsReducer';


export const rootReducer = combineReducers({
  listOrder,
  listHeader,
  listItems,
  filter,
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
