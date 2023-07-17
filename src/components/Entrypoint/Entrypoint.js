import { useEffect } from 'react';

import { profileStore } from '../../store/profile.store';

const Entrypoint = ({ children }) => {
  useEffect(() => {
    profileStore.fetchProfile();
  }, []);

  return <div>{children}</div>;
};

export { Entrypoint };
