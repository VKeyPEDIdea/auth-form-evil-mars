import React from 'react';
import './styles.css';

interface ButtonProps {
  name: string;
  onClick: () => void;
  color?: 'transparent';
}

const Button: React.FC<ButtonProps> = ({ name, onClick, color = null }) => {
  return (
    <button is="my-button" type="button" data-color={color} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
