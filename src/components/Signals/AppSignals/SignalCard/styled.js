import styled from 'styled-components';

export const Card = styled.article`
  width: 553px;
  padding: 20px 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 35px;
    height: 40px;
  }
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
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
