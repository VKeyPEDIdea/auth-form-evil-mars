import React from 'react';
import './styles.css';

class CardBoxComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('card-box', CardBoxComponent);

const CardBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <card-box>{children}</card-box>;
};

export default CardBox;
