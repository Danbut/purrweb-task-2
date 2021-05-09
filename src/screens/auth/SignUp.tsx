import React, {useContext} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {Container, Input, Button} from '../../ui';
import {selectAuthIsLoading, signUp} from '../../state/ducks/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import {signUpSchema} from './validationSchemas';
import {SIGN_IN_SCREEN} from '../../navigation/constants';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import styled, {ThemeContext} from 'styled-components/native';

interface SignUpProps {}

type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

export const SignUp: React.FC<SignUpProps> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
  });

  const dispatch = useAppDispatch();
  const onSubmit = (data: SignUpForm) => {
    dispatch(signUp(data));
  };

  const isLoading = useAppSelector(selectAuthIsLoading);

  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  return (
    <Container padding={theme.spaces.container}>
      <Header>Welcome to Prayer App!</Header>

      <Title>Signing up, please</Title>

      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            label="Your name"
            ref={ref}
            value={value}
            onChangeText={onChange}
            placeholder="Enter your name"
            errors={{message: errors?.name?.message}}
          />
        )}
        name="name"
      />

      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            label="Email"
            ref={ref}
            value={value}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChange}
            placeholder="Enter your email"
            errors={{message: errors?.email?.message}}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            label="Password"
            ref={ref}
            value={value}
            onChangeText={onChange}
            placeholder="Enter your password"
            secureTextEntry={true}
            errors={{message: errors?.password?.message}}
          />
        )}
        name="password"
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Sign up</ButtonText>
      </Button>

      <Link onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
        Already have an account? Sign in
      </Link>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : null}
    </Container>
  );
};

const Header = styled.Text`
  font-size: ${({theme}) => theme.size.large};
  align-self: center;
  margin-bottom: ${({theme}) => theme.spaces.default};
  margin-top: ${({theme}) => theme.spaces.large};
`;

const Title = styled.Text`
  font-size: ${({theme}) => theme.size.primary};
  margin-bottom: ${({theme}) => theme.spaces.default};
  align-self: center;
`;

const Link = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
  font-size: ${({theme}) => theme.size.secondary};
  text-decoration-line: underline;
  text-align: center;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;
