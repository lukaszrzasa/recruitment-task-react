import React from 'react';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';
import Items from './Items';
import ColumnFooter from './ColumnFooter';

const Column = ({columnId}) => {

  return (
    <>
      <Droppable droppableId={columnId} type="TASKS">
        {(provided) => (
          <div
            style={{overflowY:'auto',maxHeight:'100%',minHeight:'1px'}}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <Items columnId={columnId}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {columnId!=='done' && <ColumnFooter columnId={columnId}/>}
    </>
  );
};

Column.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Column;