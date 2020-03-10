import { combineReducers, createStore } from 'redux';


export const rootReducer = combineReducers({

});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
