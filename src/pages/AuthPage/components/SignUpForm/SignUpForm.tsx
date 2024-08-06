import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Signal, useSignal } from '@preact/signals-react';
import ROUTES from 'app/routes';
import { TextField, Button } from 'shared/components';
import mockFetch from 'mock/mockFetch';
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
  const [authResponse, setAuthResponse] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

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
    return isValid;
  };

  const onSignupClick = async () => {
    setIsDirty(true);
    const isValid = validateForm();
    if (isValid) {
      try {
        setIsFetching(true);
        const response = await mockFetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          setIsAuthenticated(true);
          setAuthResponse(JSON.parse(response.json).message);
        }
      } catch (error) {
        setAuthResponse((error as { message: string }).message);
      }
    }
    setIsFetching(false);
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

  if (isAuthenticated) {
    return (
      <>
        <p>{authResponse}</p>
        <Button
          name="Go to login"
          onClick={() => navigate(ROUTES.login)}
          color="transparent"
        />
      </>
    );
  }

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
          {authResponse && <p is="error-text">{authResponse}</p>}
        </list-grid>
        <card-box-actions>
          <Button
            name="Sign up"
            onClick={onSignupClick}
            disabled={isDirty && !isFormValid}
            isLoading={isFetching}
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
