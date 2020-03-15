import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Task from '../../../components/organisms/Task';

const Item = ({item, index}) => {
  return (
    <Draggable index={index} draggableId={item.id+''}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Task item={item} />
        </div>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;