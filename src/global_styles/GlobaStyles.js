import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  :root {
    --main-color: #e4c590; 
    --bg-default-color: #0d1819;
    --bg-second-color: #0e0d0c;
    --bg-third-color: #171819; 
    --white-color: #fff;
    --white-color-opacity: hsla(0,0%,100%,.2);

  }
  body {
    background-color: var(--bg-second-color);
    width: 100vw;
    overflow-x: hidden;

  }

`;

export default GlobalStyles;