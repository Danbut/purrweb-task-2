import React, {useState} from 'react';
import {Text} from 'react-native';
import {WELCOME_TEXT} from '../../constants';
import {useAppDispatch} from '../../state/hooks';
import {CONTAINER_HORIZONTAL_PADDING} from '../assets/styles/spaces';
import {Container} from '../ui/Container';
import {Label} from '../ui/Label';
import {Input} from '../ui/Input';
import {Button} from '../ui/Button';
import {ErrorMessage} from '../ui/ErrorMessage';
import typography from '../assets/styles/typography';
import * as yup from 'yup';
import {getErrorsObjectFromYup} from '../helpers/getErrorsObjectFromYup';
import {signUp} from '../../state/auth/authSlice';

interface SignUpProps {}

const schema = yup.object().shape({
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

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<SignUpForm>({} as SignUpForm);
  const [errors, setErrors] = useState<SignUpForm>({} as SignUpForm);

  const validate = (fields?: string[]) =>
    schema
      .validate(formData, {abortEarly: false})
      .then(valid => {
        setErrors({} as SignUpForm);
        if (valid) {
          return valid;
        }
      })
      .catch(err => {
        const errorsObject = (getErrorsObjectFromYup(
          fields ?? ['name', 'email', 'password'],
          err,
        ) as unknown) as SignUpForm;
        setErrors(errorsObject);
      });

  const enterNameHandler = (text: string) => {
    setFormData({...formData, name: text});
  };
  const enterEmailHandler = (text: string) => {
    setFormData({...formData, email: text});
  };
  const enterPasswordHandler = (text: string) => {
    setFormData({...formData, password: text});
  };

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Text style={typography.header}>{WELCOME_TEXT}</Text>

      <Text style={typography.title}>Signing up, please</Text>

      <Label>Your name</Label>
      <Input
        placeholder="Enter your name"
        onBlur={() => validate(['name'])}
        onChangeText={enterNameHandler}></Input>
      <ErrorMessage>{errors?.name}</ErrorMessage>

      <Label>Email</Label>
      <Input
        placeholder="Enter your email"
        onBlur={() => validate(['name', 'email'])}
        onChangeText={enterEmailHandler}></Input>
      <ErrorMessage>{errors?.email}</ErrorMessage>

      <Label>Password</Label>
      <Input
        placeholder="Enter your password"
        onBlur={() => validate()}
        onChangeText={enterPasswordHandler}
        secureTextEntry={true}></Input>
      <ErrorMessage>{errors?.password}</ErrorMessage>

      <Button
        onPress={() => {
          validate().then(isValid => {
            if (isValid) {
              dispatch(signUp(formData));
            }
          });
        }}>
        <Text style={typography.button}>Sign up</Text>
      </Button>
    </Container>
  );
};
