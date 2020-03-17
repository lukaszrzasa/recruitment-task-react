import styled from 'styled-components';

const ColumnWrapper = styled.div`
  width: 310px;
  background-color: #ebecf0;
  border-radius: 5px;
  padding: 0;
  margin: ${({theme})=>theme.sizes.md*.4}px;
  position: relative;
`;

export default ColumnWrapper;