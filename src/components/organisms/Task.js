import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 6px;
`;

const Task = ({item}) => {
  const {value, isFavourite, userId} = item;
  return (<Wrapper>
    {value}
  </Wrapper>);
};

export default Task;