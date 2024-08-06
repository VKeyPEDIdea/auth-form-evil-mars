import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Signal, useSignal } from '@preact/signals-react';
import ROUTES from 'app/routes';
import mockFetch from 'mock/mockFetch';
import { TextField, Button } from 'shared/components';
import validate from './validate';

const LoginForm = () => {
  const navigate = useNavigate();
  const email = useSignal('');
  const emailError = useSignal('');
  const password = useSignal('');
  const passwordError = useSignal('');
  const [isDirty, setIsDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [authResponse, setAuthResponse] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const validateForm = () => {
    const { errors, isValid } = validate({
      email: email.value,
      password: password.value,
    });
    setIsFormValid(isValid);
    emailError.value = errors.email;
    passwordError.value = errors.password;
    return isValid;
  };

  const onLoginClick = async () => {
    setIsDirty(true);
    const isValid = validateForm();
    if (isValid) {
      try {
        setIsFetching(true);
        const response = await mockFetch('/api/login', {
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
          name="Back to auth"
          onClick={() => navigate(ROUTES.root)}
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
          {authResponse && <p is="error-text">{authResponse}</p>}
        </list-grid>
        <card-box-actions>
          <Button
            name="Log in"
            onClick={onLoginClick}
            disabled={isDirty && !isFormValid}
            isLoading={isFetching}
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
