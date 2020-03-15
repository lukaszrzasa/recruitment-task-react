const move = (source, destination, droppableSource, droppableDestination) => {

  // clone original
  const sourceClone = [...source];
  const destClone = [...destination];

  // move item
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  // return object with mover arrays
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

export default move;