import React, { useEffect } from 'react';
import ROUTES from 'app/routes';
import { Outlet, useLocation, useNavigate } from 'react-router';

const AuthPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === ROUTES.root) navigate(ROUTES.login);
  }, [pathname, navigate]);

  return (
    <background-box>
      <background-box-content>
        <top-bar>
          <logo-type>SPA example</logo-type>
        </top-bar>
        <list-grid>
          <h1>Authorization</h1>
          <Outlet />
        </list-grid>
      </background-box-content>
    </background-box>
  );
};

export default AuthPage;
