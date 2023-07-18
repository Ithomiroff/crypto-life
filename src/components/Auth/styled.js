import styled from 'styled-components';

import { Button } from '../../styled/Global';

export const FormRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const Form = styled.form`
  width: 555px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const Fields = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Controls = styled.section`
  display: flex;
  align-items: center;
  justify-content: ${({ $centered }) => ($centered ? 'center' : 'space-between')};
  width: 100%;

  ${Button} {
    width: 45%;
  }
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 500;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
