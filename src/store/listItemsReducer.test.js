import listItemsReducer, {initialIndex, initialState} from './listItemsReducer';
import {addItem, assignUser, removeItem, setList, toggleFavourite, updateItemText} from './actions';

describe('items list reducer', () => {

  it('should return the initial state', () => {
    expect(listItemsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ITEM', () => {
    const testedValue = 'new item';
    const expected = {
      value: testedValue,
      userId: null,
      isFavourite: false,
      id: initialIndex,
    };
    const result = listItemsReducer(undefined, addItem('solved', testedValue));
    expect(result.solved).toContainEqual(expected);
    expect(result.itemsCount).toEqual(initialIndex+1);
  });

  it('should handle REMOVE_ITEM', () => {
    const initialState = {
      solved: [0, 1, 2],
    };
    const expected = {
      solved: [0, 2],
    } ;
    expect(listItemsReducer(initialState, removeItem('solved', 1))).toEqual(expected);
  });

  it('should handle SET_LIST', () => {
    const initialState = {
      solved: [3, 4, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    const param = {
      solved: [1, 2],
    };
    const expected = {
      solved: [1, 2],
      done: [1, 2, 3],
    };
    expect(listItemsReducer( initialState, setList(param) )).toEqual(expected);
  });

  it('should handle ASSIGN_USER', () => {
    const initialState = {
      solved: [3, { userId: null, isFavourite: false, }, 5, 6, 7, 8],
      done: [1, 2, 3 ],
    };
    const expected = { // should affect only solved[key][index].userId
      solved: [3, { userId: 4, isFavourite: false }, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    expect(listItemsReducer(initialState, assignUser('solved',1,4) )).toEqual(expected);
  });

  it('should handle TOGGLE_FAVOURITE', () => {
    const initialState = {
      solved: [3, { userId: 4, isFavourite: false, }, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    const expected = { // should affect only solved[key][index].isFavourite
      solved: [3, {userId: 4, isFavourite: true}, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    expect(listItemsReducer(initialState, toggleFavourite('solved',1) )).toEqual(expected);
  });


  it('should handle UPDATE_ITEM', () => {
    const testedValue = 'Lorem ipsum 123 żółw';
    const initialState = {
      solved: [3, { value:'aduadad ur32bdksfhsifbwk',userId: 4, isFavourite: false, }, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    const expected = { // should affect only solved[key][index].isFavourite
      solved: [3, { value:testedValue, userId: 4, isFavourite: false}, 5, 6, 7, 8],
      done: [1, 2, 3],
    };
    expect(listItemsReducer(initialState, updateItemText('solved',1,testedValue) )).toEqual(expected);
  });

  it('got UNDEFINED action.type - should return prevState', () => {
    const initialState = {
      solved: [ 3, {value:'test',userId: 4, isFavourite: false}, 5, 6, 7, 8 ],
      done: [ 1, 2, 3 ],
    };
    const action = {
      type: 'UNDEFINED_ACTION_TYPE',
      payload: {
        value: 'nothing'
      }
    };
    expect(listItemsReducer(initialState, action)).toEqual(initialState);
  });


});