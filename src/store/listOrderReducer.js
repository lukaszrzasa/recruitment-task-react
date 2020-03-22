import {SET_LIST_ORDER} from './types';

export const listNames = [
  'suspended',
  'toRealization',
  'accomplished',
  'solved',
  'done',
];


const listOrderReducer = ( state = listNames, action) => {
  return action.type === SET_LIST_ORDER ? [...action.payload] : state;
};

export default listOrderReducer;