import React, {useEffect, useRef, useState} from 'react';
import Column from '../../../components/molecules/Column';
import {Droppable} from 'react-beautiful-dnd';
import {useSelector} from 'react-redux';
import ItemList from './itemList';
import Flex from '../../../components/atoms/interface/Flex';
import Toggle from '../../../providers/Toggle';
import Textarea from '../../../components/atoms/form/Textarea';
import Button from '../../../components/atoms/form/Button';
import Icon from '../../../components/atoms/text/Icon';

const Test = ({toggle, isToggle}) => {
  const [value, setValue] = useState('');
  const node = useRef(null);

  const handleClick = (ev) => {
    console.log(isToggle);
    toggle();
    if(isToggle && !node.current.contains(ev.target)){
      console.log(false);
      toggle(true);
    }
  };

  useEffect(()=>{
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return <div ref={node}>
    {isToggle && <>
      <Textarea
        value={value}
        onChange={({target}) => setValue(target.value)}
      />
      <div>Buttons</div>
    </>}
    {!isToggle && <Button
      variant="gray"
      color="white"
      isSmall
      onClick={()=>toggle(true)}
    >
      <Icon icon="plus"/>
    </Button>}
  </div>
};

const Footer = ({id}) => {


  return <Toggle toggle={false} render={({toggle, isToggle})=><Test toggle={toggle} isToggle={isToggle}/>}/>;
};

const DroppableColumn = ({id, elem}) => {
  const { name, icon } = elem;

  return (<Column
    icon={icon}
    heading={name}
    footer={ id!=='done' && <Footer id={id}/> }
  >
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