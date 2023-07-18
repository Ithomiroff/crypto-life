import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Inner, Root, TabItem, Tabs } from './styled';
import { Metamask } from '../Auth/Metamask';
import { Login } from '../Auth/Login';
import { profileStore } from '../../store/profile.store';
import { Account } from './components/Account';

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

const Profile = observer(() => {
  const [activeTab, setActiveTab] = useState('login');

  if (profileStore.user) {
    return (
      <Root>
        <Account />
      </Root>
    );
  }

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
});

export { Profile };
