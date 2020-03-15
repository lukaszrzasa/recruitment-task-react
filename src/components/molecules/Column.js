import React from 'react';
import ColumnWrapper from '../atoms/ColumnWrapper';
import Heading from '../atoms/text/Heading';

const Column = ({heading, children}) => {
  return (
    <ColumnWrapper>
      <Heading>{heading}</Heading>
      {children}
    </ColumnWrapper>
  );
};

export default Column;