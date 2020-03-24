const initialState = {
  suspended: {
    icon: 'pause',
    name: 'Canceled',
  },
  toRealization: {
    icon: 'door-open',
    name: 'Waiting',
  },
  accomplished: {
    icon: 'door-closed',
    name: 'In progress',
  },
  solved: {
    icon: 'check',
    name: 'Solved',
  },
  done: {
    icon: 'check-double',
    name: 'Done',
  },
};

const listHeaderReducer = ( state = initialState) => {
  return state;
};

export default listHeaderReducer;