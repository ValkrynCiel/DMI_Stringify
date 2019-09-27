import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Josefin Sans', sans-serif;
    overflow: hidden;
  }
  
  body {
    background-color: #FED766;
  }
  
  #app {
    height: calc(100vh - 75px);
    width: 100vw;
    margin-top: 75px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
