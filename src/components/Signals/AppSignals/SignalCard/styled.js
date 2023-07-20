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
  padding-bottom: 25px;
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

export const Image = styled.div`
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center center;
  border-radius: 30px;
  width: 100%;
  height: 312px;
  margin-bottom: 30px;
`;

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 30px;
  line-height: 23px;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;

  svg {
    width: 18px;
    height: 18px;
  }
`;
