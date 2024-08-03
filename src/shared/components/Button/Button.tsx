import React from 'react';
import './styles.css';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button is="my-button" type="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
