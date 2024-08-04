import React from 'react';
import './styles.css';

interface ButtonProps {
  name: string;
  onClick: () => void;
  color?: 'transparent';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  color = null,
  disabled,
}) => {
  return (
    <button
      is="my-button"
      type="button"
      data-color={color}
      onClick={onClick}
      disabled={disabled ? true : undefined}
    >
      {name}
    </button>
  );
};

export default Button;
