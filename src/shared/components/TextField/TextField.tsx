import React from 'react';
import { Signal } from '@preact/signals-react';
import styles from './TextField.module.css';

interface TextFieldProps {
  type: 'email' | 'password' | 'text';
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: Signal<string> | string;
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  name,
  onChange,
  error,
}) => {
  return (
    <div className={styles.box}>
      <label htmlFor="name" className={styles.label}>
        {name}
      </label>
      <input
        type={type}
        name="name"
        className={styles.field}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextField;
