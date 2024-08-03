import React from 'react';
import './styles.css';

class GradientBoxComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('gradient-box', GradientBoxComponent);

const GradientBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <gradient-box>{children}</gradient-box>;
};

export default GradientBox;
