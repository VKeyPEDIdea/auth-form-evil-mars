import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
