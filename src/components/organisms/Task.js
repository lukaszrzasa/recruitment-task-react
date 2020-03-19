import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Card from '../atoms/interface/Card';
import PropTypes from 'prop-types';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import {useDispatch} from 'react-redux';
import {removeItem, toggleFavourite, updateItemText} from '../../store/actions';
import Textarea from '../atoms/form/Textarea';
import Flex from '../atoms/interface/Flex';
import ButtonGroup from '../molecules/ButtonGroup';
import Icon from '../atoms/text/Icon';
import AssignUser from '../../pages/TaskManager/components/AssignUser';

const Wrapper = styled.div`
  padding: 0 6px 6px;
  transition: transform .3s 0s;
  position: relative;
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1px 5px 2px;
  background-color: ${({theme}) => theme.colors.white};
`;

const ToggleFavourite = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding:5px;
  cursor: pointer;
  display: inline-block;
  line-height: ${({theme}) => theme.sizes.sm}px;
  font-size: ${({theme}) => theme.sizes.sm*0.65}px;
  color: ${({theme}) => theme.colors.gold};
`;

const Task = ({item, isDragging, columnId, index}) => {
  const {value, isFavourite, userId} = item;
  const [isEdited, setIsEdited] = useState(false);
  const [newValue, setNewValue] = useState(value);
  const ref = useRef(null);
  const dispatch = useDispatch();
  useDetectOutsideClick(ref, setIsEdited);

  const submit = () => {
    const valueToSet = newValue.trim();
    if(valueToSet !== value && valueToSet.length>0){
      dispatch(updateItemText(columnId, index, valueToSet));
    } else {
      // because newValue could has some spaces at the beginning or end of the value - we need to clear that
      setNewValue(valueToSet);
    }
    setIsEdited(false);
  };

  const cancel = () => {
    setNewValue(value);
    setIsEdited(false);
  };

  const onKeyDown = (ev) => { // TODO: onEnter / onEscape
    if(ev.key === 'Enter')
      submit();
    if(ev.key === 'Escape')
      cancel();
  };

  useEffect(()=>{
    if(!isEdited){
      submit();
    }
  }, [isEdited]);

  return (<Wrapper ref={ref} isDragging={isDragging}>
    <Card isFavourite={isFavourite}>
      <ToggleFavourite onClick={()=>dispatch(toggleFavourite(columnId, index))}>
        <Icon icon={isFavourite?'star':['far','star']}/>
      </ToggleFavourite>
      {!isEdited && value}
      {isEdited && <Textarea
        onChange={({target}) => setNewValue(target.value)}
        autoFocus
        value={newValue}
        onKeyDown={onKeyDown}
        style={{marginBottom:'15px'}}
      />}
      <Footer>
        <Flex className="show-on-hover">
          {isEdited && <Flex>
            <ButtonGroup type="cancel" onClick={cancel} />
            <ButtonGroup type="save" onClick={submit} />
          </Flex>}
          {!isEdited && <Flex className="on-hover">
            <ButtonGroup type="remove" onClick={()=>dispatch(removeItem(columnId, index))} />
            <ButtonGroup type="edit" onClick={()=>setIsEdited(true)} />
          </Flex>}
          <AssignUser userId={userId} />
        </Flex>
      </Footer>
    </Card>
  </Wrapper>);
};

Task.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.node,
    isFavourite: PropTypes.bool,
    userId: PropTypes.number,
  }),
  index: PropTypes.number,
  columnId: PropTypes.string,
  isDragging: PropTypes.bool,
};

export default Task;