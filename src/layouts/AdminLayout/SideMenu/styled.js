import styled from 'styled-components';

import { Nav } from '../../AppLayout/styled';

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;

  ${Nav} {
    margin-top: 100px;
  }
`;
