import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  margin: ${({theme})=>theme.sizes.md*.4}px;
`;

export default CardWrapper;