import {listNames} from './listOrderReducer';
import {ADD_ITEM, ASSIGN_USER, REMOVE_ITEM, SET_LIST, TOGGLE_FAVOURITE, UPDATE_ITEM} from './types';

const initialState = listNames.reduce((acc, curr)=>{
  acc[curr] = [];
  return acc;
},{
  itemsCount:0, // helper variable (unique id) -> increment on each new item
});


const listItemsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_ITEM: {
      const {key, newItem} = action.payload;
      let newState = {...state};
      newState[key].push({
        ...newItem,
        id: state.itemsCount,
      });
      newState.itemsCount++;
      return newState;
    }

    case REMOVE_ITEM: {
      const {key, index} = action.payload;
      const newList = [...state[key]];//TODO (optional): allow (temporary) undo deletion
      newList.splice(index, 1);
      return {
        ...state,
        [key]: [...newList],
      }
    }

    case SET_LIST: {
      return {
        ...state,
        ...action.payload, // it can be 1 or 2 (move to different list)
      }
    }

    case ASSIGN_USER: {
      const {key, index, userId} = action.payload;
      const newState = {...state};
      const item = {
        ...state[key][index],
        userId,
      };
      newState[key].splice(index, 1, item);
      return {...newState};
    }

    case TOGGLE_FAVOURITE: {
      const {key, index} = action.payload;
      const newState = {...state};
      const item = {
        ...state[key][index],
        isFavourite: !state[key][index],
      };
      newState[key].splice(index, 1, item);
      return newState;
    }

    case UPDATE_ITEM: {
      const {key, index, value} = action.payload;
      const newState = {...state};
      const item = {
        ...state[key][index],
        value,
      };
      newState[key].splice(index, 1, item);
      return newState;
    }

    default:
      return state;
  }
};

export default listItemsReducer;