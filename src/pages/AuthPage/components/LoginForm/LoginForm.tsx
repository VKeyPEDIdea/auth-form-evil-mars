import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ROUTES from 'app/routes';
import { TextField, Button } from 'shared/components';
import { Signal, useSignal } from '@preact/signals-react';
import validate from './validate';

const LoginForm = () => {
  const navigate = useNavigate();
  const email = useSignal('');
  const emailError = useSignal('');
  const password = useSignal('');
  const passwordError = useSignal('');
  const [isDirty, setIsDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { errors, isValid } = validate({
      email: email.value,
      password: password.value,
    });
    setIsFormValid(isValid);
    emailError.value = errors.email;
    passwordError.value = errors.password;
  };

  const onLoginClick = () => {
    setIsDirty(true);
    validateForm();
    if (isFormValid) {
      console.log('submit');
    }
  };

  const onFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: Signal<string>,
  ) => {
    field.value = e.target.value;
    if (isDirty) {
      validateForm();
    }
  };

  return (
    <>
      <card-box>
        <list-grid>
          <TextField
            name="Email"
            type="email"
            error={emailError}
            onChange={(e) => onFieldChange(e, email)}
          />
          <TextField
            name="Password"
            type="password"
            error={passwordError}
            onChange={(e) => onFieldChange(e, password)}
          />
        </list-grid>
        <card-box-actions>
          <Button
            name="Log in"
            onClick={onLoginClick}
            disabled={isDirty && !isFormValid}
          />
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
