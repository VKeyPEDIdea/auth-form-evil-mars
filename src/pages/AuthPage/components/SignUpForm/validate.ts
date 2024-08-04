interface Fields {
  email: string;
  password: string;
  confirmPassword: string;
}

const validate = ({ email, password, confirmPassword }: Fields) => {
  let isValid = true;
  const errors = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  if (email === '') {
    isValid = false;
    errors.email = 'Email should not be empty';
  } else if (!email.includes('@')) {
    isValid = false;
    errors.email = 'Email is not valid. Email should contain the "@" sign';
  }

  if (password === '') {
    isValid = false;
    errors.password = 'Password should not be empty';
  } else if (password.length < 6) {
    isValid = false;
    errors.password = 'Password is too short. Please use at least 6 characters';
  }

  if (confirmPassword === '') {
    isValid = false;
    errors.confirmPassword = 'Password should not be empty';
  } else if (password !== confirmPassword) {
    isValid = false;
    errors.confirmPassword =
      'Confirm Password value is not equal to Password value.';
  }

  return { isValid, errors };
};

export default validate;
