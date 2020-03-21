import React, {useEffect, useRef, useState} from 'react';
import Column from '../../../components/molecules/Column';
import {Droppable} from 'react-beautiful-dnd';
import {useDispatch, useSelector} from 'react-redux';
import ItemList from './itemList';
import Flex from '../../../components/atoms/interface/Flex';
import Textarea from '../../../components/atoms/form/Textarea';
import styled from 'styled-components';
import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import {addItem} from '../../../store/actions';
import ButtonGroup from '../../../components/molecules/ButtonGroup';

const FooterWrapper = styled.div`
  padding: 10px;
`;


const Footer = ({id}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const container = useRef(null);
  const dispatch = useDispatch();
  useDetectOutsideClick(container, setIsVisible);

  const submit = () => {
    const newValue = value.trim();
    if (newValue.length > 0) {
      dispatch(addItem(id, newValue));
    }
    setIsVisible(false);
    setValue('');// clear value
  };

  const cancel = () => {
    setValue('');
    setIsVisible(false);
  };

  const onKeyDown = (ev) => {
    if(ev.key === 'Enter')
      submit();
    if(ev.key === 'Escape')
      cancel();
  };

  useEffect(()=>{
    if(isVisible===false){
      submit();
    }
  },[isVisible]);

  //TODO: add character counter


  return <FooterWrapper ref={container}>
    {!isVisible && <Flex style={{justifyContent:'center'}}>
      <ButtonGroup type="add" onClick={()=>setIsVisible(true)} />
    </Flex>}
    {isVisible && <>
      <Textarea
        autoFocus
        value={value}
        onChange={({target}) => target.value.length<=120 && setValue(target.value)}
        onKeyDown={onKeyDown}
      />
      <Flex>
        <ButtonGroup type="cancel" onClick={cancel} />
        <ButtonGroup type="save" onClick={submit} />
      </Flex>
    </>}
  </FooterWrapper>;
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
          style={{overflowY:'auto',maxHeight:'100%',minHeight:'1px'}}
          ref={provided.innerRef}
          {...provided.droppableProps}>
          <ItemList id={id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Column>);
};


const ColumnList = () => {

  const {listOrder, listHeader} = useSelector(state => state);

  return (
    <>
      {listOrder.map((e,i)=> <DroppableColumn key={i} id={e} elem={listHeader[e]} />)}
    </>
  );
};

export default ColumnList;