import styled from 'styled-components';

import { Button } from '../../styled/Global';

export const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Line = styled.div`
  flex: 1;
`;

export const SoundBtn = styled(Button)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;
