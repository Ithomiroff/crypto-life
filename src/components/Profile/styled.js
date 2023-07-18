import styled from 'styled-components';

export const Root = styled.section`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Inner = styled.div`
  padding: 125px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tabs = styled.ul`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  padding: 10px;
  width: 360px;
`;

export const TabItem = styled.li`
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, $active }) => ($active ? theme.colors.light : theme.colors.primary)};
  font-size: 18px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  width: 50%;
  height: 100%;
  display: inline-block;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  user-select: none;
`;
