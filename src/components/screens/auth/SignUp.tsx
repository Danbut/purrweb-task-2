import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {WELCOME_TEXT} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {CONTAINER_HORIZONTAL_PADDING} from '../../assets/styles/spaces';
import {Container} from '../../ui/Container';
import {Label} from '../../ui/Label';
import {Input} from '../../ui/Input';
import {Button} from '../../ui/Button';
import {ErrorMessage} from '../../ui/ErrorMessage';
import typography from '../../assets/styles/typography';
import {getErrorsObjectFromYup} from '../../helpers/getErrorsObjectFromYup';
import {selectAuthIsLoading, signUp} from '../../../state/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import {signUpSchema} from './validationSchemas';
import {PRIMARY_COLOR} from '../../assets/styles/colors';

interface SignUpProps {}

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<SignUpForm>({} as SignUpForm);
  const [errors, setErrors] = useState<SignUpForm>({} as SignUpForm);
  const navigation = useNavigation();
  const isLoading = useAppSelector(selectAuthIsLoading);

  const validate = (fields?: string[]) =>
    signUpSchema
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
      <Text
        style={typography.link}
        onPress={() => navigation.navigate('SignIn')}>
        Already have an account? Sign in
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : null}
    </Container>
  );
};
