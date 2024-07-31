import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';

const ROUTES = {
  root: '/',
};

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <AuthPage />,
  },
]);

export default router;
