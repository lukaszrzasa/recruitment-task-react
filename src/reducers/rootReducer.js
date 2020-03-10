import { combineReducers, createStore } from 'redux';
import taskManagerReducer from './taskManagerReducer';


export const rootReducer = combineReducers({
  taskManagerReducer,
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
