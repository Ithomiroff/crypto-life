import { Navigate } from 'react-router-dom';

import { AppLayout } from './layouts/AppLayout/AppLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { News } from './components/News/News';

const APP_ROUTES = [
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      {
        path: 'news',
        element: <News />,
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
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
