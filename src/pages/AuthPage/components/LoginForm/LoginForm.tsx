import ROUTES from 'app/routes';
import React from 'react';
import { useNavigate } from 'react-router';
import { TextField, Button } from 'shared/components';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <card-box>
        <list-grid>
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
        </list-grid>
        <card-box-actions>
          <Button name="Log in" onClick={() => {}} />
        </card-box-actions>
      </card-box>
      <Button
        name="Sign up for an account"
        color="transparent"
        onClick={() => navigate(ROUTES.signup)}
      />
    </>
  );
};

export default LoginForm;
