const initialState = {
  suspended: {
    icon: 'pause',
    name: 'Wstrzymane',
  },
  toRealization: {
    icon: 'door-open',
    name: 'Do realizacji',
  },
  accomplished: {
    icon: 'door-closed',
    name: 'Realizowane',
  },
  solved: {
    icon: 'check',
    name: 'Rozwiązane',
  },
  done: {
    icon: 'check-double',
    name: 'Zakończone',
  },
};

const listHeaderReducer = ( state = initialState) => {
  return state;
};

export default listHeaderReducer;