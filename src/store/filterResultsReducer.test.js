import filterResultsReducer, {initialState} from './filterResultsReducer';
import {
  clearFilterList,
  clearFilterUser,
  setFilterListMode,
  setFilterListValue,
  setFilterUserMode,
  setFilterUserValue
} from './actions';

describe('filter results reducer', () => {

  it('should return the initial state', () => {
    expect(filterResultsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_FILTER_USER_MODE', () => {
    const testedValue = 'role';
    const expected = {
      mode: testedValue,
      value: "",
    };
    const result = filterResultsReducer(undefined, setFilterUserMode(testedValue));
    expect(result.user).toEqual(expected);
    expect(result.list).toEqual(initialState.list);
  });

  it('should handle SET_FILTER_USER_VALUE', () => {
    const testedValue = 'role';
    const expected = {
      mode: initialState.user.mode,
      value: testedValue,
    };
    const result = filterResultsReducer(undefined, setFilterUserValue(testedValue));
    expect(result.user).toEqual(expected);
    expect(result.list).toEqual(initialState.list);
  });

  it('should handle SET_FILTER_LIST_MODE', () => {
    const testedValue = 'role';
    const expected = {
      mode: testedValue,
      value: "",
    };
    const result = filterResultsReducer(undefined, setFilterListMode(testedValue));
    expect(result.list).toEqual(expected);
    expect(result.user).toEqual(initialState.user);
  });

  it('should handle SET_FILTER_LIST_VALUE', () => {
    const testedValue = 'role';
    const expected = {
      mode: initialState.list.mode,
      value: testedValue,
    };
    const result = filterResultsReducer(undefined, setFilterListValue(testedValue));
    expect(result.list).toEqual(expected);
    expect(result.user).toEqual(initialState.user);
  });

  const state = {
    user: {
      mode: initialState.user.mode,
      value: 'some value',
    },
    list: {
      mode: initialState.list.mode,
      value: 'another'
    }
  };

  it('should handle CLEAR_FILTER_USER', () => {
    const expected = {
      mode: state.user.mode,
      value: '',
    };
    const result = filterResultsReducer(state, clearFilterUser());
    expect(result.user).toEqual(expected);
    expect(result.list).toEqual(state.list);
  });

  it('should handle CLEAR_FILTER_LIST', () => {
    const expected = {
      mode: state.list.mode,
      value: '',
    };
    const result = filterResultsReducer(state, clearFilterList());
    expect(result.list).toEqual(expected);
    expect(result.user).toEqual(state.user);
  });


});