import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Task from '../../../components/organisms/Task';

const Item = ({columnId, index, item}) => {
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
  columnId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    value: PropTypes.string,
    userId: PropTypes.number,
    isFavourite: PropTypes.bool,
    id: PropTypes.number.isRequired,
  }),
};

export default Item;