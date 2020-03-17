import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Task from '../../../components/organisms/Task';


const Item = ({columnId, item, index}) => {
  return (
    <Draggable index={index} draggableId={item.id+''}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Task
            isDragging={snapshot.isDragging}
            item={item}
            index={index}
            columnId={columnId}
          />
        </div>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default Item;