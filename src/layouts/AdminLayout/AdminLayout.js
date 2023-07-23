import { Outlet } from 'react-router-dom';

import { Content, Layout, Sidebar } from './styled';
import { SideMenu } from './SideMenu/SideMenu';

const AdminLayout = () => {
  return (
    <Layout>
      <Sidebar>
        <SideMenu />
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export { AdminLayout };
