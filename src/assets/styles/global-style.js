import { createGlobalStyle } from 'styled-components';

/*
  Cores tema:
    Dark Purple: #260f26
    Russian Violet: #251f47
    Purple Navy: #404e7c
    Shiny Shamrock: #71b48d
    Eton Blue: #86cb92
*/

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    font-size: 14px;
    font-family: sans-serif;
  }
`;
