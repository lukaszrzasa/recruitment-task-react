import React from 'react';
import styled, { css } from 'styled-components';
import Toggle from '../../providers/Toggle';
import PropTypes from 'prop-types';

const StyledSelect = styled.div`
  max-height: ${({theme}) => theme.sizes.md}px;
  overflow: visible;
  > div {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border: ${({isOpen}) => isOpen ? };
  }
`;

const SelectRender = ({toggle, isToggle}) => {
  return <StyledSelect isOpen={isToggle}>

  </StyledSelect>;
};

const Select = () => <Toggle render={SelectRender} />;

Select.propTypes = {
  isSmall: PropTypes.bool,
};

export default Select;