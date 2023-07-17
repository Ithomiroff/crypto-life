import { createGlobalStyle } from 'styled-components';

export const APP_THEME = {
  colors: {
    bg: '#FAFAFA',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;
