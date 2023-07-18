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
    height: 100%;
  }
  body {
    height: 100%;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: calc(${({ theme }) => theme.sizes.container} - ${({ theme }) => theme.sizes.gap});
  padding: 0 15px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
`;

export const Input = styled.input`
  height: 47px;
  width: 100%;
  padding: 0 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.03);
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  outline: none;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
