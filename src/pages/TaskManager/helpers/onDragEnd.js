const getList = e => e.items;

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = getList(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = getList(source);
  const destClone = getList(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


const onDragEnd = (result, currentState) => {
  const { source, destination } = result;

  // dropped outside the list
  if (!destination) {
    return false;
  }
  let newSate;
  if (source.droppableId === destination.droppableId) {
    const items =  reorder(
      currentState[source.droppableId],
      source.index,
      destination.index,
    );
    newSate = {[destination.droppableId]:[...items]};
  } else {
    const items = move(
      currentState[source.droppableId],
      currentState[destination.droppableId],
      source,
      destination,
    );
    newSate = {...items};
  }
  return newSate;
};

export default onDragEnd;
