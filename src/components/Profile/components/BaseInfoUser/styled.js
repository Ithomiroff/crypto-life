import styled from 'styled-components';

export const Root = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.section`
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: #000000;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 600;
  font-size: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
