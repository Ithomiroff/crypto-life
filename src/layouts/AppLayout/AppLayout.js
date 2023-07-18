import { Outlet, NavLink } from 'react-router-dom';

import { Header, Inner, Layout, LogoText, LogoWrapper, Nav, NavLink as StyledLink } from './styled';
import { Container } from '../../styled/Global';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { MENU_CONFIG } from './menu.config';

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <Inner>
            <LogoWrapper to="/app/news">
              <Logo />
              <LogoText>
                <span>CryptoLife</span> <br />
                <span>крипто-сообщество</span>
              </LogoText>
            </LogoWrapper>
            <Nav>
              {MENU_CONFIG.map(({ path, label, icon }) => (
                <StyledLink key={path}>
                  <NavLink to={`/app/${path}`}>
                    {icon}
                    <span>{label}</span>
                  </NavLink>
                </StyledLink>
              ))}
            </Nav>
          </Inner>
        </Container>
      </Header>
      <Outlet />
    </Layout>
  );
};

export { AppLayout };
