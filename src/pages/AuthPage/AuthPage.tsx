import React from 'react';

class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('hello-world', HelloWorldComponent);

const AuthPage = () => {
  return (
    <>
      <h1>Auth Page</h1>
      <p>Description text</p>
      <hello-world>Hello</hello-world>
    </>
  );
};

export default AuthPage;
