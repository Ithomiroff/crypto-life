import { Navigate, useLocation } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { profileStore } from '../../store/profile.store';

const PrivateRoute = observer(({ children }) => {
  const location = useLocation();

  if (profileStore.loading) {
    return null;
  }

  if (profileStore.user?.role !== 'admin') {
    return (
      <Navigate
        to="/app/news"
        replace
      />
    );
  }

  return <>{children}</>;
});

export { PrivateRoute };
