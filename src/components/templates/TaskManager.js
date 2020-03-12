import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Header = styled.div`
  height: ${({theme}) => theme.sizes.lg*1.8}px;
  padding: ${({theme}) => theme.sizes.lg*0.4}px;
`;

const Content = styled.div`
  padding: ${({theme}) => theme.sizes.lg*0.4}px;
  height: auto;
`;

const Footer = styled.div`
  padding: ${({theme}) => theme.sizes.lg*0.4}px;
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