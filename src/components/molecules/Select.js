import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Option from '../atoms/form/Option';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const StyledSelect = styled.div`
  height: 30px;
  overflow: visible;
  width: 120px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .selected {
    display: block;
    order: 1;
  }
  .no-selected {
    display: ${({isVisible}) => isVisible ? 'block' : 'none'};
    order: 2;
    margin-top: -1px
  }
`;

const Select = ({options, evSelect, defaultValue}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  useDetectOutsideClick(ref, setIsVisible);

  const handleClick = (key) => {
    evSelect(key);
    setSelected(key);
    setIsVisible(false);
  };

  return <StyledSelect
    ref={ref}
    isVisible={isVisible}
    onClick={() => isVisible || setIsVisible(true)}
  >
    {options.map(({key, name},i) => <Option
      onClick={ () => handleClick(key) }
      key={i}
      className={ key===selected ? 'selected' : 'no-selected' }
    >
      {name}
    </Option>)}
  </StyledSelect>
};

Select.propTypes = {
  evSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  defaultValue: PropTypes.string.isRequired,
};

export default Select;