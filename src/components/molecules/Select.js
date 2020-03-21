import React, { useRef, useState } from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Option from '../atoms/form/Option';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Icon from '../atoms/text/Icon';

// helpers
const radiusTop = css`
  border-radius: 4px 4px 0 0;
`;

const radiusBottom = css`
  border-radius: 0 0 4px 4px;
`;

const radiusAll = css`
  border-radius: 4px;
`;

const StyledSelect = styled.div`
  height: ${({theme}) => theme.sizes.lg}px;
  overflow: visible;
  width: 120px;
  display: flex;
  flex-direction: ${({selectTop}) => selectTop ? 'column-reverse' : 'column'};
  align-items: ${({selectTop}) => selectTop ? 'flex-end' : 'flex-start'};
  cursor: pointer;
  position: relative;
  > div {
    border: solid 1px ${({theme, isVisible}) => isVisible ? theme.colors.gray : 'transparent'};
  }
  .selected {
    display: block;
    order: 1;
    ${({isVisible, selectTop}) => !isVisible ? radiusAll : (selectTop ? radiusBottom : radiusTop)};
  }
  .no-selected {
    display: ${({isVisible}) => isVisible ? 'block' : 'none'};
    &:last-child {
      ${({selectTop}) => !selectTop ? radiusBottom : radiusTop};
    }
    order: 2;
    ${({selectTop}) => selectTop ? css`
      margin-bottom: -1px
    ` : css`
      margin-top: -1px;
    `}
  }
  > ${Icon} {
    transition: transform .2s;
    transform: rotate(${({isVisible, selectTop})=> isVisible!==selectTop ? 180 : 0}deg);
  }
`;

const ExpandIcon = styled(Icon)`
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  top: ${({theme}) => (theme.sizes.lg/2)-7}px;
  right: ${({theme}) => (theme.sizes.lg/2)-14}px;
  z-index: 4000;
`;

const Select = ({options, evSelect, mode, selectTop}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useDetectOutsideClick(ref, setIsVisible);

  const handleClick = (key) => {
    setIsVisible(false);
    evSelect(key);
  };

  return <StyledSelect
    ref={ref}
    isVisible={isVisible}
    selectTop={selectTop}
    onClick={()=> !isVisible && setIsVisible(true)}
  >
    <ExpandIcon icon="caret-down"/>
    {options.map(({key, name},i) => <Option
      onClick={ () => isVisible && handleClick(key) }
      key={i}
      className={ key===mode ? 'selected' : 'no-selected' }
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
  mode: PropTypes.string.isRequired,
  selectTop: PropTypes.bool,
};

Select.defaultProps = {
  selectTop: false,
};

export default Select;