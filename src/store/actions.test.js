import {ADD_ITEM, ASSIGN_USER, REMOVE_ITEM, TOGGLE_FAVOURITE, UPDATE_ITEM} from './types';
import {addItem, assignUser, removeItem, toggleFavourite, updateItemText} from './actions';

describe('actions', () => {

  it('should create an action to add item in listItemReducer', () => {
    const key = 'column1';
    const value = 'new item body';
    const expectedAction = {
      type: ADD_ITEM,
      payload: {
        key,
        value,
      },
    };
    expect(addItem(key, value)).toEqual(expectedAction);
  });

  it('should create an action to remove item in listItemReducer', () => {
    const key = 'column1';
    const index = 1;
    const expectedAction = {
      type: REMOVE_ITEM,
      payload: {
        key,
        index,
      },
    };
    expect(removeItem(key, index)).toEqual(expectedAction);
  });

  it('should create an action to assign user in listItemReducer', () => {
    const key = 'column1';
    const index = 1;
    const userId = null;
    const expectedAction = {
      type: ASSIGN_USER,
      payload: {
        key,
        index,
        userId
      },
    };
    expect(assignUser(key, index, userId)).toEqual(expectedAction);
  });

  it('should create an action to toggle favourite of the item in listItemReducer', () => {
    const key = 'column1';
    const index = 1;
    const expectedAction = {
      type: TOGGLE_FAVOURITE,
      payload: {
        key,
        index,
      },
    };
    expect(toggleFavourite(key, index)).toEqual(expectedAction);
  });

  it('should create an action to update text of the item in listItemReducer', () => {
    const key = 'column1';
    const index = 1;
    const value = 'new item body';
    const expectedAction = {
      type: UPDATE_ITEM,
      payload: {
        key,
        index,
        value,
      },
    };
    expect(updateItemText(key, index,value)).toEqual(expectedAction);
  });

});