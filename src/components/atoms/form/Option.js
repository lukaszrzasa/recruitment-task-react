import styled from 'styled-components';

const Option = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  z-index: 2000;
  border: solid 1px ${({theme}) => theme.colors.gray};
  background-color: #fff;
`;

export default Option;