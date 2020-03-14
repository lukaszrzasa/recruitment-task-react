import {ADD_ITEM_TO_COLUMN, SET_STATE} from './taskManagerActions';


const initialState = {
  suspended: {
    icon: 'pause',
    name: 'Wstrzymane',
    items:[{id:'s1'},{id:'1ss'}],
  },
  toRealization: {
    icon: 'door-open',
    name: 'Do realizacji',
    items:[{id:'s2'},{id:'2ss'},{id:'2sss'},{id:'h2'}],
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
    case ADD_ITEM_TO_COLUMN: {
      let newState = {...state};
      newState[action.columnId].items.push(action.item);
      return newState;
    }
    case SET_STATE: {
      let newState = Object.keys(action.newState).map(key => ({
        key,
        value: {
          items: action.newState[key],
          ...state[key],
        }
      })).reduce((acc, curr)=>{
        acc[curr.key] = {...curr.value};
        return acc;
      },{});
      return {
        ...newState,
        ...state,
      };
    }
    default:
      return state;
  }
};

export default taskManagerReducer;