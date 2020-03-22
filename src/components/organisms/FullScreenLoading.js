import React from 'react';
import styled, {keyframes} from 'styled-components';
import Flex from '../atoms/interface/Flex';
import Heading from '../atoms/text/Heading';

const animation = keyframes`
  from { 
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  to {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  margin-top: 20px;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  > div {
    position: absolute;
    border: 3px solid #999;
    opacity: 1;
    border-radius: 50%;
    animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  > div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;


const FullScreenLoading = ({children}) => {
  return (
    <Wrapper>
      <Heading>{children}</Heading>
      <LoadingContainer><div/><div/></LoadingContainer>
    </Wrapper>
  );
};

export default FullScreenLoading;