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
import {selectAuthIsLoading, signUp} from '../../state/ducks/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import {signUpSchema} from './validationSchemas';
import {SIGN_IN_SCREEN} from '../../navigation/constants';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

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

  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Text style={styles.header}>{WELCOME_TEXT}</Text>

      <Text style={styles.title}>Signing up, please</Text>

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
        <Text style={styles.button}>Sign up</Text>
      </Button>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
        Already have an account? Sign in
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : null}
    </Container>
  );
};
