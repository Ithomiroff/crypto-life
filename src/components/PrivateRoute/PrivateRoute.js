import { Navigate, useLocation } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { profileStore } from '../../store/profile.store';

const PrivateRoute = observer(({ children }) => {
  const location = useLocation();

  const isPrivate =
    location.pathname.indexOf('/admin') >= 0 || location.pathname.indexOf('/profile') > 0;

  if (profileStore.loading) {
    return null;
  }

  if (!profileStore.user && isPrivate) {
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
