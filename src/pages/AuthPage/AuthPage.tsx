import React from 'react';
import { TextField, CardBox, GradientBox } from 'shared/components';

const AuthPage = () => {
  return (
    <GradientBox>
      <CardBox>
        <h1>Sign up</h1>
        <TextField name="Email" type="email" />
        <TextField name="Password" type="password" />
      </CardBox>
    </GradientBox>
  );
};

export default AuthPage;
