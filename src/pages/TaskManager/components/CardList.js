import React from 'react';
import Icon from '../../../components/atoms/text/Icon';
import Column from '../../../components/molecules/Column';
import {Droppable} from 'react-beautiful-dnd';
import {useSelector} from 'react-redux';
import ItemList from './itemList';
import Flex from '../../../components/atoms/Flex';

const DroppableColumn = ({id, elem}) => {
  const { name, icon } = elem;
  return (<Column heading={<><Icon icon={icon} /> {name}</>}>
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}>
          <ItemList id={id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Column>);
};


const CardList = () => {

  const {listOrder, listHeader} = useSelector(state => state);

  return (
    <Flex>
      {listOrder.map((e,i)=> <DroppableColumn key={i} id={e} elem={listHeader[e]} />)}
    </Flex>
  );
};

export default CardList;