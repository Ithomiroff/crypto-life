import styled, { createGlobalStyle } from 'styled-components';

export const APP_THEME = {
  colors: {
    light: '#FFFFFF',
    bg: '#FAFAFA',
    primary: '#6A1B9A',
    gray: '#D9D9D9',
    darkGray: '#808080',
    accent: '#F6851B',
  },
  sizes: {
    container: '1135px',
    gap: '15px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    min-height: 100%;
  }
  body {
    height: 100%;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: calc(${({ theme }) => theme.sizes.container} - ${({ theme }) => theme.sizes.gap});
  padding: 0 15px;
`;

export const Button = styled.button`
  padding: 15px 50px;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
`;
