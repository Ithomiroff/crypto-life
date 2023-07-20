import styled from 'styled-components';

export const Root = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;
