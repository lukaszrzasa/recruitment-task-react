
const reorder = (list, droppableSource, droppableDestination) => {
  // get index
  const startIndex = droppableSource.index;
  const endIndex   = droppableDestination.index;
  if(startIndex > list.length
    || startIndex < 0
    || endIndex > list.length
    || endIndex < 0
  ) return false;

  // clone original
  let destClone = [...list];
  const result = {};

  // reorder
  const [removed] = destClone.splice(startIndex, 1);
  console.log(destClone);
  console.log(removed);
  destClone.splice(endIndex, 0, removed);
  console.log(destClone);

  // return object with reordered array
  result[droppableDestination.droppableId] = destClone;
  return result;
};

export default reorder;