import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../atoms/text/Color';
import Heading from '../atoms/text/Heading';
import Icon from '../atoms/text/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding:10px;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;


const ColumnHeader = ({icon, heading}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Color variant="gray">
          <Icon icon={icon} />
        </Color>
      </IconWrapper>
      <Heading>
        <strong>
          <Color variant="gray">
            {heading}
          </Color>
        </strong>
      </Heading>
    </Wrapper>
  );
};

ColumnHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default ColumnHeader;