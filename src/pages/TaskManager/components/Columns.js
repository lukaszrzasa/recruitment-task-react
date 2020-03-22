import React from 'react';
import {useSelector} from 'react-redux';
import {Draggable} from 'react-beautiful-dnd';
import ColumnWrapper from '../../../components/atoms/interface/ColumnWrapper';
import ColumnHeader from '../../../components/molecules/ColumnHeader';
import Column from './Column';

const Columns = () => {

  const {listOrder, listHeader} = useSelector(state => state);

  return (
    <>
      {listOrder.map((e, i) => <Draggable
        key={e}
        draggableId={e}
        index={i}
      >
        {provided => <ColumnWrapper {...provided.draggableProps} ref={provided.innerRef} >
          <ColumnHeader
            {...provided.dragHandleProps}
            heading={listHeader[e].name}
            icon={listHeader[e].icon}
          />
          <Column columnId={e}/>
        </ColumnWrapper>}
      </Draggable>)}
    </>
  );
};

export default Columns;
