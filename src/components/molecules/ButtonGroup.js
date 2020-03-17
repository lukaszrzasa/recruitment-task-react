import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/form/Button';
import Color from '../atoms/text/Color';
import { darken } from 'polished';
import {getColor} from '../atoms/helpers/getColor';
import Icon from '../atoms/text/Icon';

const types = {
  edit: {
    variant: 'gray',
    text: 'Edytuj',
    icon: 'pen',
  },
  cancel: {
    variant: 'red',
    text: 'Anuluj',
    icon: 'times',
  },
  remove: {
    variant: 'red',
    text: 'Usuń',
    icon: 'times',
  },
  save: {
    variant: 'green',
    text: 'Zapisz',
    icon: 'check',
  },
  add: {
    variant: 'gray',
    text: 'Dodaj',
    icon: 'plus',
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 8px;
  > span {
    transition: color .3s;
    font-size: ${({theme}) => theme.sizes.xs}px !important;
  }
  > button {
  margin-right: 2px;
  }
  &:hover {
    > button {
      background-color: ${({variant}) => darken(.2, getColor(variant))};
    }
    > span {
      color: ${({variant}) => darken(.2, getColor(variant))};
    }
  }
`;

const ButtonGroup = ({type, ...props}) => {
  const {variant, text, icon} = types[type];
  return (
    <Wrapper variant={variant} {...props}>
      <Button variant={variant} color="white" isSmall>
        <Icon icon={icon} />
      </Button>
      <Color variant={variant}>
        {text}
      </Color>
    </Wrapper>
  );
};

ButtonGroup.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

export default ButtonGroup;