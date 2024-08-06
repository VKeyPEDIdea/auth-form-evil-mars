import React from 'react';
import './styles.css';

interface ButtonProps {
  name: string;
  onClick: () => void;
  color?: 'transparent';
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  color = null,
  disabled,
  isLoading,
}) => {
  return (
    <button
      is="my-button"
      type="button"
      data-color={color}
      onClick={onClick}
      disabled={disabled ? true : undefined}
      data-loading={isLoading}
    >
      {name}
    </button>
  );
};

export default Button;
