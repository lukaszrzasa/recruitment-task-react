import styled from 'styled-components';

const Textarea = styled.textarea`
  display: block;
  max-width: 100%;
  resize: vertical;
  border-radius: 5px;
  border: solid 1px ${({theme}) => theme.colors.gray};
  padding: 1px 2px;
`;

export default Textarea;