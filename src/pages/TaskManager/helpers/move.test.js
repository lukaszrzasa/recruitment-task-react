import move from './move';

const source = [ 0, 1, 2, 3 ];
const destination = [ 'a', 'b', 'c' ];
const droppableSource = (index) => ({
  index,
  droppableId: 'source',
});
const droppableDestination = (index) => ({
  index,
  droppableId: 'destination',
});


describe('move function', () => {

  it('works fine', () => {
    expect(move(
      source,
      destination,
      droppableSource(2),
      droppableDestination(0)
    )).toEqual({source: [0,1,3], destination: [2, 'a', 'b', 'c']});
  });

  it('got non existing source index', () => {
    expect(move(
      source,
      destination,
      droppableSource(5),
      droppableDestination(0)
    )).toBeFalsy();
  });

  it('got non existing destination index', () => {
    expect(move(
      source,
      destination,
      droppableSource(1),
      droppableDestination(-2)
    )).toBeFalsy();
  });

  it('got non numeric index', () => {
    expect(move(
      source,
      destination,
      droppableSource('as'),
      droppableDestination({})
    )).toBeFalsy();
  });

});