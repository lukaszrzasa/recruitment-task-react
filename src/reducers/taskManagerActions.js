
export const ADD_ITEM_TO_COLUMN = 'ADD_ITEM_TO_COLUMN';
export const SET_STATE = 'SET_STATE';


export const addItemToColumn = (columnId, item) => ({type:ADD_ITEM_TO_COLUMN, columnId, item });
export const setState = (newState) => ({type:SET_STATE, newState });