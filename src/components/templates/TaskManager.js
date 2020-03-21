import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../atoms/interface/Header';
import Flex from '../atoms/interface/Flex';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100000;
  flex-direction: column;
  background: rgb(30,18,85);
  background: linear-gradient(135deg, rgba(30,18,85,1) 0%, rgba(205,62,228,1) 100%);
`;

const Content = styled(Flex)`
  padding: ${({theme}) => theme.sizes.lg*0.4}px;
  height: auto;
  overflow: hidden;
`;

const Footer = styled.div`
  padding: ${({theme}) => `${theme.sizes.lg*0.2}px ${theme.sizes.lg*0.4}px`};
  background-color: #fff;
  margin-top: auto;
`;

const TaskManagerTemplate = ({header, children, footer, ...props}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};


TaskManagerTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default TaskManagerTemplate;