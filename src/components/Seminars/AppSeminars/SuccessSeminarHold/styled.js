import styled from 'styled-components';

export const Root = styled.article`
  width: 414px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: 30px;
  }
`;

export const Title = styled.span`
  width: 414px;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px 0 10px;
`;
