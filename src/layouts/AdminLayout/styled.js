import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 390px 1fr;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 5px 0px 50px 0px rgba(0, 0, 0, 0.03);
`;
export const Content = styled.div`
  padding: 55px 100px;
`;
