interface Fields {
  email: string;
  password: string;
}

const validate = ({ email, password }: Fields) => {
  let isValid = true;
  const errors = {
    email: '',
    password: '',
  };

  if (email === '') {
    isValid = false;
    errors.email = 'Email should not be empty';
  } else if (!email.includes('@')) {
    isValid = false;
    errors.email = 'Email is not valid. Should contain the "@"';
  }

  if (password === '') {
    isValid = false;
    errors.password = 'Password should not be empty';
  } else if (password.length < 6) {
    isValid = false;
    errors.password = 'Password is too short. Please use at least 6 characters';
  }

  return { isValid, errors };
};

export default validate;
