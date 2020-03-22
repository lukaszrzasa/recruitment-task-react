import styled from 'styled-components';
import Card from './Card';

const ErrorCard = styled(Card)`
  background-color: ${({theme}) => theme.colors.red};
  color: #fff;
  padding: 10px;
`;

export default ErrorCard;