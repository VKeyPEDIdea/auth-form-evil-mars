import React from 'react';
import { TextField } from 'shared/components';
import Button from 'shared/components/Button';

const AuthPage = () => {
  return (
    <gradient-box>
      <card-box>
        <list-grid>
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
        </list-grid>
        <card-box-actions>
          <Button name="Sign up" onClick={() => {}} />
        </card-box-actions>
      </card-box>
    </gradient-box>
  );
};

export default AuthPage;
