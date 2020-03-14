
export const ADD_ITEM_TO_COLUMN = 'ADD_ITEM_TO_COLUMN';
export const SET_STATE = 'UPDATE_STATE';


export const addItemToColumn = (columnId, item) => ({type:ADD_ITEM_TO_COLUMN, columnId, item });
export const updateState = (newState) => ({type:SET_STATE, newState });