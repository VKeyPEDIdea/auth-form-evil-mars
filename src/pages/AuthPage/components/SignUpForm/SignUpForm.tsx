import React from 'react';
import ROUTES from 'app/routes';
import { useNavigate } from 'react-router';
import { TextField, Button } from 'shared/components';

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <card-box>
        <list-grid>
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
          <TextField name="Confirm password" type="password" />
        </list-grid>
        <card-box-actions>
          <Button name="Sign up" onClick={() => {}} />
        </card-box-actions>
      </card-box>
      <Button
        name="Log in to an existing account"
        color="transparent"
        onClick={() => navigate(ROUTES.login)}
      />
    </>
  );
};

export default SignUpForm;
