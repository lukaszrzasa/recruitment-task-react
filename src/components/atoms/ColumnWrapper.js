import styled from 'styled-components';

const ColumnWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  margin: ${({theme})=>theme.sizes.md*.4}px;
`;

export default ColumnWrapper;