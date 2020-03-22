import {listNames} from './listOrderReducer';
import {ADD_ITEM, ASSIGN_USER, REMOVE_ITEM, SET_LIST, TOGGLE_FAVOURITE, UPDATE_ITEM} from './types';

export const initialIndex = 5;

export const initialState = listNames.reduce((acc, curr)=>{
  acc[curr] = [];
  if(curr==='done') acc[curr].push({
    id: 1,
    value: 'aa',
    userId: 6,
    isFavourite: true,
  },{
    id: 2,
    value: 'aa',
    userId: 6,
    isFavourite: true,
  },{
    id: 3,
    value: 'aa',
    userId: 6,
    isFavourite: true,
  },{
    id: 4,
    value: 'aa',
    userId: 6,
    isFavourite: true,
  });
  return acc;
},{
  itemsCount:initialIndex, // helper variable (unique id) -> increment on each new item
});

const defaultItem = {
  value: '',
  userId: null,
  isFavourite: false,
};


const listItemsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_ITEM: {
      const {key, value} = action.payload;
      let newState = {...state};
      newState[key].push({
        ...defaultItem,
        value,
        id: state.itemsCount,
      });
      newState.itemsCount++;
      return newState;
    }

    case REMOVE_ITEM: {
      const {key, index} = action.payload;
      const newList = [...state[key]]; //TODO: allow to undo deletion (optional / future update ;))
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
        isFavourite: !state[key][index].isFavourite,
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