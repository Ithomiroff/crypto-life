import { Navigate } from 'react-router-dom';

import { AppLayout } from './layouts/AppLayout/AppLayout';
import { News } from './components/News/News';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Profile } from './components/Profile/Profile';
import { SignUp } from './components/Auth/SignUp';
import { Recovery } from './components/Auth/Recovery';
import { Confirm } from './components/Auth/Confirm';
import { Seminars } from './components/Seminars/Seminars';
import { Signals } from './components/Signals/Signals';
import { AdminLayout } from './layouts/AdminLayout/AdminLayout';

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
        path: 'seminars',
        element: <Seminars />,
      },
      {
        path: 'signals',
        element: <Signals />,
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
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'news',
        element: <News admin />,
      },
      {
        path: 'seminars',
        element: <Seminars admin />,
      },
      {
        path: 'signals',
        element: <Signals admin />,
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
