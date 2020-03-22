import styled from 'styled-components';

const ColumnWrapper = styled.div`
  width: 310px;
  background-color: #ebecf0;
  border-radius: 5px;
  padding: 0;
  margin: ${({theme})=>theme.sizes.md*.4}px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction:column;
  align-items: stretch;
  justify-content: stretch;
  flex-grow:1;
`;

export default ColumnWrapper;