import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  * {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyle;