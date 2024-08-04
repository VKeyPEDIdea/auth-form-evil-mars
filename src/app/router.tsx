import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';
import { SignUpForm } from 'pages/AuthPage/components';
import LoginForm from 'pages/AuthPage/components/LoginForm';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <AuthPage />,
    children: [
      {
        path: ROUTES.login,
        element: <LoginForm />,
      },
      {
        path: ROUTES.signup,
        element: <SignUpForm />,
      },
    ],
  },
]);

export default router;
