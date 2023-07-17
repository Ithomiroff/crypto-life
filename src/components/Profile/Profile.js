import { useState } from 'react';

import { Inner, Root, TabItem, Tabs } from './styled';
import { Metamask } from '../Auth/Metamask';
import { Login } from '../Auth/Login';

const tabs = [
  {
    key: 'login',
    label: 'Логин',
  },
  {
    key: 'metamask',
    label: 'Metamask',
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Root>
      <Tabs>
        {tabs.map(({ key, label }) => (
          <TabItem
            key={key}
            $active={activeTab === key}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </TabItem>
        ))}
      </Tabs>

      <Inner>{activeTab === 'login' ? <Login /> : <Metamask />}</Inner>
    </Root>
  );
};

export { Profile };
