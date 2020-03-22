import styled from 'styled-components';

const Option = styled.div`
  width: 100%;
  height: ${({theme}) => theme.sizes.lg}px;
  line-height: ${({theme}) => theme.sizes.lg}px;
  padding: 0 10px;
  z-index: 2000;
  background-color: #eee;
`;

export default Option;