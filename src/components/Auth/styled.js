import styled from 'styled-components';

export const MetaRoot = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
