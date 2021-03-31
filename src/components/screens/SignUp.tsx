import React from 'react';
import {Button} from 'react-native';
import {setToken} from '../../state/auth/authSlice';
import {useAppDispatch} from '../../state/hooks';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <Button title="Register" onPress={() => dispatch(setToken('token'))} />
  );
};
