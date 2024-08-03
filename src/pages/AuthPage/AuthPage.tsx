import React from 'react';
import { TextField, CardBox } from 'shared/components';

const AuthPage = () => {
  return (
    <CardBox>
      <h1>Sign up</h1>
      <TextField name="Email" type="email" />
      <TextField name="Password" type="password" />
    </CardBox>
  );
};

export default AuthPage;
