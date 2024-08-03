import React from 'react';
import styles from './TextField.module.css';

interface TextFieldProps {
  type: 'email' | 'password' | 'text';
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({ type, name }) => {
  return (
    <>
      <label htmlFor="name" className={styles.label}>
        {name}
      </label>
      <input type={type} name="name" className={styles.field} />
    </>
  );
};

export default TextField;
