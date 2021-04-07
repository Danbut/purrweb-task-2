import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email("Email doesn't valid.")
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.',
    ),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email doesn't valid.")
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.',
    ),
});
