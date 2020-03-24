import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import styled from 'styled-components';
import Select from '../molecules/Select';
import TextInput from '../atoms/form/TextInput';
import Button from '../atoms/form/Button';
import Icon from '../atoms/text/Icon';


const OutsideWrapper = styled.div`
  display: flex;
  transition: width .4s;
  overflow: visible;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  align-items: ${({selectTop}) => selectTop ? 'flex-end' : 'flex-start'};
  height: ${({theme}) => theme.sizes.xl}px;
  width: ${({isVisible, theme}) => isVisible ? '480' : theme.sizes.xl}px;
  border-radius: ${({theme}) => theme.sizes.xl/2}px;
  padding-right: ${({theme}) => theme.sizes.xl-2}px;
  border: solid 1px ${({theme}) => theme.colors.gray};
`;


const Wrapper = styled.div`
  display: flex;
  align-items: ${({selectTop}) => selectTop ? 'flex-end' : 'flex-start'};
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  height: 140px;
  width: 100%;
`;

const SelectWrapper = styled.div`
  padding: 9px 5px 9px 20px;
  width: 140px;
  position: relative;
  z-index: 1000;
`;

const InputWrapper = styled.div`
  padding: 9px 15px 9px 5px;
  flex: 1 auto;
  position: relative;
  z-index: 1000;
  min-width: 100px;
  input {
    background-color: #eee;
    padding: 0 5px;
    border-radius: 4px;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: -1px;
  right: -1px;
  outline: none;
  height: height: ${({theme}) => theme.sizes.xl}px;;
`;

const FormGroup = ({options, mode, value, evSelect, setValue, selectTop}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const input = useRef(null);
  useDetectOutsideClick(ref, setIsVisible);

  const handleClick = () =>{
    setIsVisible(!(isVisible || value.length));
    setValue('');
  };
  useEffect(()=>{
    if(isVisible && input.current)
      setTimeout(()=>{
        if(isVisible && input.current)
          input.current.focus();
      },400)
  }, [isVisible]);

  const visibility = () => isVisible || value.length;

  return (<OutsideWrapper ref={ref} isVisible={visibility()} selectTop={selectTop}>
    <Wrapper selectTop={selectTop}>
      <SelectWrapper>
        <Select
          selectTop={selectTop}
          mode={mode}
          evSelect={evSelect}
          options={options}
        />
      </SelectWrapper>
      <InputWrapper>
        <TextInput
          ref={input}
          value={value}
          placeholder="Type here"
          onChange={({target}) => setValue(target.value)} />
      </InputWrapper>
    </Wrapper>
    <ButtonWrapper onClick={handleClick}>
      <Button variant="gray" color="white">
        <Icon icon={visibility() ? 'times' : 'search'} />
      </Button>
    </ButtonWrapper>
  </OutsideWrapper>);
};

FormGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  mode: PropTypes.string.isRequired,
  value: PropTypes.string,
  evSelect: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  selectTop: PropTypes.bool,
};

export default FormGroup;