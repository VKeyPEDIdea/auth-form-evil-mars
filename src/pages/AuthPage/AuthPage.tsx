import React from 'react';
import { TextField } from 'shared/components';

const AuthPage = () => {
  return (
    <gradient-box>
      <card-box>
        <list-grid>
          <h1>Sign up</h1>
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
        </list-grid>
      </card-box>
    </gradient-box>
  );
};

export default AuthPage;
