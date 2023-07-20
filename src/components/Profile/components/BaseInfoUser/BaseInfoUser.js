import { Avatar, Name, Root } from './styled';
import { AccountsList } from '../AccountsList/AccountsList';

const TYPES = {
  none: 'Базовый аккаунт',
  signals: 'Трейдер',
  investments: 'Инвестор',
  fullpackage: 'PRO',
};

const BaseInfoUser = ({ user }) => {
  const { firstName, lastName, avatarUrl, subscription } = user;

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
        <span>{TYPES[subscription]}</span>
      </Name>

      <AccountsList />
    </Root>
  );
};

export { BaseInfoUser };
