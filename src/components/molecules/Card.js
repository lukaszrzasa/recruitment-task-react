import React from 'react';
import CardWrapper from '../atoms/CardWrapper';
import Heading from '../atoms/text/Heading';

const Card = ({heading, children}) => {
  return (
    <CardWrapper>
      <Heading>{heading}</Heading>
      {children}
    </CardWrapper>
  );
};

export default Card;