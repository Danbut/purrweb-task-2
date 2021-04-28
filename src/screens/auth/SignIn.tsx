import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {Container, Input, Button} from '../../ui';
import {
  styles,
  PRIMARY_COLOR,
  CONTAINER_HORIZONTAL_PADDING,
  WELCOME_TEXT,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {signInSchema} from './validationSchemas';
import {selectAuthIsLoading, signIn} from '../../state/ducks/auth/authSlice';
import {SIGN_UP_SCREEN} from '../../navigation/constants';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

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

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Text style={styles.header}>{WELCOME_TEXT}</Text>

      <Text style={styles.title}>Signing in, please</Text>

      <Controller
        control={control}
        render={({field: {value, onChange, ref}}) => (
          <Input
            label="Email"
            ref={ref}
            value={value}
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
