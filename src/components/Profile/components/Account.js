import { observer } from 'mobx-react-lite';

import { profileStore } from '../../../store/profile.store';
import { BaseInfoUser } from './BaseInfoUser/BaseInfoUser';

const Account = observer(() => {
  console.log(profileStore.user);

  const user = profileStore.user;

  return (
    <div>
      <BaseInfoUser user={user} />
    </div>
  );
});

export { Account };
