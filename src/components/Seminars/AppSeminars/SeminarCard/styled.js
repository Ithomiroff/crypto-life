import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.05);

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Banner = styled.div`
  height: 208px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ $url }) => $url});
`;

export const Params = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: 'Rubik', sans-serif;
  padding: 20px 0;
`;

export const Param = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const Content = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  p {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
  }
  li {
    list-style: disc;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGray};
    &::marker {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Detail = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

export const BottomBlock = styled.div`
  margin: auto 0 0;
`;

export const DetailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    &:first-child {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.darkGray};
    }
    &:last-child {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
