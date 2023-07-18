import { observer } from 'mobx-react-lite';

import { profileStore } from '../../../../store/profile.store';
import { Avatar, Name, Root } from './styled';

const BaseInfoUser = ({ user }) => {
  const { firstName, lastName, role, avatarUrl } = user;

  return (
    <Root>
      <Avatar>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${firstName} ${lastName} avatar`}
          />
        ) : (
          <span>
            {firstName[0]}
            {lastName[0]}
          </span>
        )}
      </Avatar>
      <Name>
        <h2>
          {firstName} {lastName}
        </h2>{' '}
        <br />
        <span>{role === 'admin' ? 'Администратор' : 'Базовый аккаунт'}</span>
      </Name>
    </Root>
  );
};

export { BaseInfoUser };
