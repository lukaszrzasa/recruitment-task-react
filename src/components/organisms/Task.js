import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/interface/Card';

const Wrapper = styled.div`
  padding: 6px 0;
  transition: transform .3s 0s;
  transform: rotate(${({isDragging}) => isDragging ? 3 : 0}deg);
`;

const Footer = styled.div``;

const Task = ({item, isDragging}) => {
  const {value, isFavourite, userId} = item;
  return (<Wrapper isDragging={isDragging}>
    <Card isFavourite={isFavourite}>
      {value}
      <Footer className="show-on-hover">
        buttons, {userId}
      </Footer>
    </Card>
  </Wrapper>);
};

export default Task;