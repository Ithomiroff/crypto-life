import { Navigate } from 'react-router-dom';

import { AppLayout } from './layouts/AppLayout/AppLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { News } from './components/News/News';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Profile } from './components/Profile/Profile';
import { SignUp } from './components/Auth/SignUp';
import { Recovery } from './components/Auth/Recovery';
import { Confirm } from './components/Auth/Confirm';

const APP_ROUTES = [
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'recovery',
        element: <Recovery />,
      },
      {
        path: 'confirm',
        element: <Confirm />,
      },
    ],
  },
  {
    path: 'admin',
    element: (
      <PrivateRoute>
        <PrivateRoute />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'news',
        element: <News admin />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Navigate
        replace
        to="/app/news"
      />
    ),
  },
];

export { APP_ROUTES };
