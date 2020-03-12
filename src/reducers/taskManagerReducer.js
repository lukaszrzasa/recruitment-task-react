import {ADD_ITEM_TO_COLUMN, SET_STATE} from './taskManagerActions';


const initialState = {
  suspended: {
    icon: 'pause',
    name: 'Wstrzymane',
    items:[],
  },
  toRealization: {
    icon: 'door-open',
    name: 'Do realizacji',
    items:[],
  },
  accomplished: {
    icon: 'door-closed',
    name: 'Realizowane',
    items:[],
  },
  solved: {
    icon: 'check',
    name: 'Rozwiązane',
    items:[],
  },
  done: {
    icon: 'check-double',
    name: 'Zakończone',
    items:[],
  },
};

const taskManagerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_COLUMN:
      let newState = {...state};
      newState[action.columnId].items.push(action.item);
      return newState;
    case SET_STATE:
      return {
        ...action.newState,
      };
    default:
      return state;
  }
};

export default taskManagerReducer;