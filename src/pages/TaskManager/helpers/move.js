const move = (source, destination, droppableSource, droppableDestination) => {

  const startIndex = droppableSource.index;
  const endIndex   = droppableDestination.index;
  if(startIndex > source.length
    || startIndex < 0
    || endIndex > destination.length
    || endIndex < 0
    || typeof startIndex !== 'number'
    || typeof endIndex !== 'number'
  ) return false;

  // clone original
  const sourceClone = [...source];
  const destClone = [...destination];

  // move item
  const [removed] = sourceClone.splice(startIndex, 1);
  destClone.splice(endIndex, 0, removed);

  // return object with mover arrays
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

export default move;