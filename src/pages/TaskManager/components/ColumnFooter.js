import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import {addItem} from '../../../store/actions';
import Flex from '../../../components/atoms/interface/Flex';
import ButtonGroup from '../../../components/molecules/ButtonGroup';
import Textarea from '../../../components/atoms/form/Textarea';
import PropTypes from 'prop-types';

const FooterWrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
`;

const ColumnFooter = ({columnId}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const container = useRef(null);
  const dispatch = useDispatch();
  useDetectOutsideClick(container, setIsVisible);

  const submit = () => {
    const newValue = value.trim();
    if (newValue.length > 0) {
      dispatch(addItem(columnId, newValue));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isVisible]);

  //TODO: add character counter (optional)


  return <FooterWrapper ref={container}>
    {!isVisible && <Flex style={{justifyContent:'center'}}>
      <ButtonGroup type="add" onClick={()=>setIsVisible(true)} />
    </Flex>}
    {isVisible && <>
      <Textarea
        autoFocus
        value={value}
        onChange={({target}) => setValue(target.value.substring(0,240))}
        onKeyDown={onKeyDown}
      />
      <Flex>
        <ButtonGroup type="cancel" onClick={cancel} />
        <ButtonGroup type="save" onClick={submit} />
      </Flex>
    </>}
  </FooterWrapper>
};

ColumnFooter.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default ColumnFooter;