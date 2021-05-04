import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {Container, Input, Button} from '../../ui';
import {useNavigation} from '@react-navigation/native';
import {signInSchema} from './validationSchemas';
import {selectAuthIsLoading, signIn} from '../../state/ducks/auth/authSlice';
import {SIGN_UP_SCREEN} from '../../navigation/constants';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import styled, {ThemeContext} from 'styled-components/native';

interface SignInProps {}

type SignInForm = {
  email: string;
  password: string;
};

export const SignIn: React.FC<SignInProps> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema),
  });

  const dispatch = useAppDispatch();
  const onSubmit = (data: SignInForm) => {
    dispatch(signIn(data));
  };

  const isLoading = useAppSelector(selectAuthIsLoading);

  const navigation = useNavigation();

  const theme = useContext(ThemeContext);

  return (
    <Container padding={theme.spaces.container}>
      <Header>Welcome to Prayer App!</Header>

      <Title>Signing in, please</Title>

      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            label="Email"
            ref={ref}
            value={value}
            onChangeText={onChange}
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCorrect={false}
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
        <ButtonText>Sign in</ButtonText>
      </Button>

      <Link onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>
        Don't have an account? Sign up
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
