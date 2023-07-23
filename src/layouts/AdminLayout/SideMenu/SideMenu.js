import { NavLink } from 'react-router-dom';

import { Menu } from './styled';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { LogoText, LogoWrapper, Nav, NavLink as StyledLink } from '../../AppLayout/styled';
import { ADMIN_MENU_CONFIG } from '../../menu.config';

const SideMenu = () => {
  return (
    <Menu>
      <LogoWrapper to="/app/news">
        <Logo />
        <LogoText>
          <span>CryptoLife</span> <br />
          <span>крипто-сообщество</span>
        </LogoText>
      </LogoWrapper>
      <Nav $admin>
        {ADMIN_MENU_CONFIG.map(({ path, label, icon }) => (
          <StyledLink key={path}>
            <NavLink to={`/app/${path}`}>
              {icon}
              <span>{label}</span>
            </NavLink>
          </StyledLink>
        ))}
      </Nav>
    </Menu>
  );
};

export { SideMenu };
