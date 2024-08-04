import React from 'react';
import { TextField } from 'shared/components';
import Button from 'shared/components/Button';

const AuthPage = () => {
  return (
    <background-box>
      <background-box-content>
        <top-bar>
          <logo-type>SPA example</logo-type>
        </top-bar>
        <list-grid>
          <h1>Authorization</h1>
          <card-box>
            <list-grid>
              <TextField name="Email" type="email" />
              <TextField name="Password" type="password" />
            </list-grid>
            <card-box-actions>
              <Button name="Sign up" onClick={() => {}} />
            </card-box-actions>
          </card-box>
          <Button
            name="Log in to an existing account"
            color="transparent"
            onClick={() => {}}
          />
        </list-grid>
      </background-box-content>
    </background-box>
  );
};

export default AuthPage;
