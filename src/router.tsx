import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ConnectAgent from '@/pages/admin/connectivity';
import Dashboard from '@/pages/dashboard';
import MyGroups from '@/pages/my-groups';
import { Register } from '@/pages/auth/register';
import { Login } from '@/pages/auth/login';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: <MyGroups />,
    },
    {
      path: '/:key',
      element: <Dashboard />,
    },
    {
      path: '/connect-agent',
      element: <ConnectAgent />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
