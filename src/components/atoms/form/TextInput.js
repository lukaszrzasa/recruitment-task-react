
import styled from 'styled-components';

const TextInput = styled.input`
  height: ${({theme}) => theme.sizes.lg}px;
  border: none;
  outline: none;
  padding: 0 5px;
`;

export default TextInput;