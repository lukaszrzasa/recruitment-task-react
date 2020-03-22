import reorder from './reorder';

const source = [ 0, 1, 2, 3 ];
const droppableSource = (index) => ({
  index,
  droppableId: 'source',
});
const droppableDestination = (index) => ({
  index,
  droppableId: 'source',
});

describe('reorder function', () => {

  it('works properly', () => {
    expect(reorder(
      source,
      droppableSource(2),
      droppableDestination(0)
    )).toEqual({source: [ 2, 0, 1, 3 ]});
  });

  it('push item properly at the end of array', () => {
    expect(reorder(
      source,
      droppableSource(2),
      droppableDestination(4)
    )).toEqual({source: [ 0, 1, 3, 2 ]});
  });

  it('got non existing source index', () => {
    expect(reorder(
      source,
      droppableSource(-2),
      droppableDestination(0)
    )).toBeFalsy();
  });

  it('got non existing destination index', () => {
    expect(reorder(
      source,
      droppableSource(2),
      droppableDestination(5)
    )).toBeFalsy();
  });

});