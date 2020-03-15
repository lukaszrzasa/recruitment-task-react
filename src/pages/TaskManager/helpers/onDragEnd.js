import reorder from './reorder';
import move from './move';

const onDragEnd = (result, currentState) => {
  const { source, destination } = result;

  return source.droppableId === destination.droppableId ? reorder(
    currentState[source.droppableId],
    source,
    destination,
  ) : move(
    currentState[source.droppableId],
    currentState[destination.droppableId],
    source,
    destination,
  );
};

export default onDragEnd;
