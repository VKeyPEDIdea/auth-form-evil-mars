import React, { useState } from 'react';
import ROUTES from 'app/routes';
import { useNavigate } from 'react-router';
import { TextField, Button } from 'shared/components';
import { Signal, useSignal } from '@preact/signals-react';
import validate from './validate';

const SignUpForm = () => {
  const navigate = useNavigate();
  const email = useSignal('');
  const emailError = useSignal('');
  const password = useSignal('');
  const passwordError = useSignal('');
  const confirmPassword = useSignal('');
  const confirmPasswordError = useSignal('');
  const [isDirty, setIsDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { errors, isValid } = validate({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
    setIsFormValid(isValid);
    emailError.value = errors.email;
    passwordError.value = errors.password;
    confirmPasswordError.value = errors.confirmPassword;
  };

  const onSignupClick = () => {
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
          <TextField
            name="Confirm password"
            type="password"
            error={confirmPasswordError}
            onChange={(e) => onFieldChange(e, confirmPassword)}
          />
        </list-grid>
        <card-box-actions>
          <Button
            name="Sign up"
            onClick={onSignupClick}
            disabled={isDirty && !isFormValid}
          />
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
