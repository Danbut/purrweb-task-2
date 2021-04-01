import React from 'react';
import {Text} from 'react-native';
import {WELCOME_TEXT} from '../../constants';
import {setToken} from '../../state/auth/authSlice';
import {useAppDispatch} from '../../state/hooks';
import {CONTAINER_HORIZONTAL_PADDING} from '../assets/styles/spaces';
import {Container} from '../ui/Container';
import {Label} from '../ui/Label';
import {Input} from '../ui/Input';
import {Button} from '../ui/Button';
import {ErrorMessage} from '../ui/ErrorMessage';
import typography from '../assets/styles/typography';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Text style={typography.header}>{WELCOME_TEXT}</Text>

      <Text style={typography.title}>Signing up, please</Text>

      <Label>Your name</Label>
      <Input placeholder="Enter your name"></Input>
      <ErrorMessage></ErrorMessage>

      <Label>Email</Label>
      <Input placeholder="Enter your email"></Input>
      <ErrorMessage></ErrorMessage>

      <Label>Password</Label>
      <Input placeholder="Enter your password"></Input>
      <ErrorMessage></ErrorMessage>

      <Button onPress={() => dispatch(setToken('token'))}>
        <Text style={typography.button}>Sign up</Text>
      </Button>
    </Container>
  );
};
