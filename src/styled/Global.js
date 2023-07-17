import styled, { createGlobalStyle } from 'styled-components';

export const APP_THEME = {
  colors: {
    light: '#FFFFFF',
    bg: '#FAFAFA',
    primary: '#6A1B9A',
    gray: '#D9D9D9',
  },
  sizes: {
    container: '1135px',
    gap: '15px',
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

export const Container = styled.div`
  margin: 0 auto;
  width: calc(${({ theme }) => theme.sizes.container} - ${({ theme }) => theme.sizes.gap});
  padding: 0 15px;
`;
