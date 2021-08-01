import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Serif', serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  a{
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
