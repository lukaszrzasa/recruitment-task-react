import {
  CLEAR_FILTER_LIST, CLEAR_FILTER_USER,
  SET_FILTER_LIST_MODE,
  SET_FILTER_LIST_VALUE,
  SET_FILTER_USER_MODE,
  SET_FILTER_USER_VALUE
} from './types';


export const initialState = {
  list: {
    mode: 'content', // "content" / "user"
    value: '',
  },
  user: {
    mode: 'user', // "user" / "role"
    value: '',
  }
};

const filterResultsReducer = ( state = initialState, action ) => {
  let newState = {...state};
  switch(action.type) {
    case SET_FILTER_USER_MODE: {
      newState.user.mode = action.payload;
      return newState;
    }
    case SET_FILTER_USER_VALUE: {
      newState.user.value = action.payload;
      return newState;
    }
    case SET_FILTER_LIST_MODE: {
      newState.list.mode = action.payload;
      return newState;
    }
    case SET_FILTER_LIST_VALUE: {
      newState.list.value = action.payload;
      return newState;
    }
    case CLEAR_FILTER_LIST: {
      newState.list.value = '';
      return newState
    }
    case CLEAR_FILTER_USER: {
      newState.user.value = '';
      return newState
    }
    default:
      return state;
  }
};

export default filterResultsReducer;