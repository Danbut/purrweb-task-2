import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {WELCOME_TEXT} from '../../assets/styles/strings';
import {useAppDispatch, useAppSelector} from '../../../state/hooks';
import {CONTAINER_HORIZONTAL_PADDING} from '../../assets/styles/spaces';
import {Container} from '../../ui/Container';
import {Label} from '../../ui/Label';
import {Input} from '../../ui/Input';
import {Button} from '../../ui/Button';
import {ErrorMessage} from '../../ui/ErrorMessage';
import styles from '../../assets/styles';
import {getErrorsObjectFromYup} from '../../helpers/getErrorsObjectFromYup';
import {useNavigation} from '@react-navigation/native';
import {signInSchema} from './validationSchemas';
import {selectAuthIsLoading, signIn} from '../../../state/auth/authSlice';
import {PRIMARY_COLOR} from '../../assets/styles/colors';
import {SIGN_UP_SCREEN} from '../../navigation/constants';

interface SignInProps {}

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn: React.FC<SignInProps> = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<SignInForm>({} as SignInForm);
  const [errors, setErrors] = useState<SignInForm>({} as SignInForm);
  const navigation = useNavigation();
  const isLoading = useAppSelector(selectAuthIsLoading);

  const validate = (fields?: string[]) =>
    signInSchema
      .validate(formData, {abortEarly: false})
      .then(valid => {
        setErrors({} as SignInForm);
        if (valid) {
          return valid;
        }
      })
      .catch(err => {
        const errorsObject = (getErrorsObjectFromYup(
          fields ?? ['email', 'password'],
          err,
        ) as unknown) as SignInForm;
        setErrors(errorsObject);
      });

  const enterEmailHandler = (text: string) => {
    setFormData({...formData, email: text});
  };
  const enterPasswordHandler = (text: string) => {
    setFormData({...formData, password: text});
  };

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Text style={styles.header}>{WELCOME_TEXT}</Text>

      <Text style={styles.title}>Signing in, please</Text>

      <Label>Email</Label>
      <Input
        placeholder="Enter your email"
        onBlur={() => validate(['email'])}
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
              dispatch(signIn(formData));
            }
          });
        }}>
        <Text style={styles.button}>Sign in</Text>
      </Button>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>
        Don't have an account? Sign up
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : null}
    </Container>
  );
};
