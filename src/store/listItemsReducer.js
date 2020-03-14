import {listNames} from './listOrderReducer';
import {ADD_ITEM, ASSIGN_USER, REMOVE_ITEM, SET_LIST, TOGGLE_FAVOURITE, UPDATE_ITEM} from './types';

const initialState = listNames.reduce((acc, curr)=>{
  acc[curr] = [];
  return acc;
},{});


const listItemsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_ITEM: {
      const {key, newItem} = action.payload;
      return {
        [key]: [
          ...state[key],
          newItem,
        ],
        ...state,
      };
    }

    case REMOVE_ITEM: {
      const {key, index} = action.payload;
      const newList = [...state[key]];//TODO (optional): allow (temporary) undo deletion
      newList.splice(index, 1);
      return {
        [key]: [...newList],
        ...state,
      }
    }

    case SET_LIST: {
      return {
        ...action.payload, // it can be 1 or 2 (move to different list)
        ...state,
      }
    }

    case ASSIGN_USER: {
      const {key, index, userId} = action.payload;
      const newState = {...state};
      const item = {
        userId,
        ...state[key][index],
      };
      newState[key].splice(index, 1, item);
      return {...newState};
    }

    case TOGGLE_FAVOURITE: {
      const {key, index} = action.payload;
      const newState = {...state};
      const item = {
        isFavourite: !state[key][index],
        ...state[key][index],
      };
      newState[key].splice(index, 1, item);
      return newState;
    }

    case UPDATE_ITEM: {
      const {key, index, value} = action.payload;
      const newState = {...state};
      const item = {
        value,
        ...state[key][index],
      };
      newState[key].splice(index, 1, item);
      return newState;
    }

    default:
      return state;
  }
};

export default listItemsReducer;