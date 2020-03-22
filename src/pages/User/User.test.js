import {addIndexAndColumnId, filterByUserId, flattenArrayOfArrays} from './User';

// [ ...num ] => [ ...{ userId: num } ]
const items = [1, 2, 3, 4, 5, 1, 1].map(userId => ({userId}));

describe('User page helper functions', () => {

  it('should return tasks assigned only to the specific user', () => {
    expect(filterByUserId(items, 1)).toHaveLength(3);
  });

  it('should flatten array of arrays', () => {
    expect(flattenArrayOfArrays([[1,2],[3,4],[5,6]])).toHaveLength(6);
  });

  it('should add index & columnId', () => {
    expect(addIndexAndColumnId([{userId:1}], 'custom-column')).toEqual([{userId:1, index:0, columnId: 'custom-column'}]);
  });

});