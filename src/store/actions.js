import {
  SET_LIST,
  ADD_ITEM,
  ASSIGN_USER,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SET_LIST_ORDER,
  TOGGLE_FAVOURITE,
  SET_FILTER_LIST_MODE,
  SET_FILTER_USER_MODE,
  SET_FILTER_LIST_VALUE,
  SET_FILTER_USER_VALUE, CLEAR_FILTER_LIST, CLEAR_FILTER_USER,
} from './types';


/* listOrder */
/*-----------*/

export const setListOrder = (newArray) => ({
  type: SET_LIST_ORDER,
  payload: newArray,
});


/* listItems */
/*-----------*/

export const addItem = (key, value) => ({
  type: ADD_ITEM,
  payload: {
    key,
    value,
  }
});

export const removeItem = (key, index) => ({
  type: REMOVE_ITEM,
  payload: {
    key,
    index,
  }
});

export const setList = (newLists) => ({
  type: SET_LIST,
  payload: newLists,
});

export const assignUser = (key, index, userId) => ({
  type: ASSIGN_USER,
  payload: {
    key,
    index,
    userId
  }
});

export const toggleFavourite = (key, index) => ({
  type: TOGGLE_FAVOURITE,
  payload: {
    key,
    index,
  }
});

export const updateItemText = (key, index, value) => ({
  type: UPDATE_ITEM,
  payload: {
    key,
    index,
    value
  }
});


/* filter results */
/*----------------*/

export const setFilterListMode = option => ({
  type: SET_FILTER_LIST_MODE,
  payload: option,
});

export const setFilterListValue = value => ({
  type: SET_FILTER_LIST_VALUE,
  payload: value,
});

export const setFilterUserMode = option => ({
  type: SET_FILTER_USER_MODE,
  payload: option,
});

export const setFilterUserValue = value => ({
  type: SET_FILTER_USER_VALUE,
  payload: value,
});

export const clearFilterList = () => ({
  type: CLEAR_FILTER_LIST,
});

export const clearFilterUser = () => ({
  type: CLEAR_FILTER_USER,
});
