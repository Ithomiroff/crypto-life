import { NavLink as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 15px 0;
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
`;

export const Inner = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 40px;
`;

export const LogoWrapper = styled(RouterLink)`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoText = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 800;
  span {
    &:last-child {
      color: #000000;
      font-size: 11px;
      font-weight: 300;
    }
  }
`;

export const NavLink = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
