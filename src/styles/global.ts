import { createGlobalStyle } from "styled-components";

import { colorsCSS } from "./colors";

export default createGlobalStyle`
  ${colorsCSS}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: white;
  }

  a {
    text-decoration: none !important;
    color: inherit !important;
  }

  html {
    scroll-behavior: smooth;
  }

  textarea, input {
    outline: none;
    border: none;
  }

  ul {
    list-style: none;
  }

  -webkit-appearance: none;

  .cursor-pointer {
    cursor: pointer;
  }
`;
