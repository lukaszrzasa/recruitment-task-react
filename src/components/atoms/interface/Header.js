import styled from 'styled-components';

const Header = styled.div`
  height: ${({theme}) => theme.sizes.lg*1.8}px;
  padding: ${({theme}) => theme.sizes.lg*0.4}px;
`;

export default Header;