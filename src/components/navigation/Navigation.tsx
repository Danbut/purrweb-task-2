import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, Button} from 'react-native';
import {
  getToken,
  removeToken,
  selectAuthIsPreload,
  selectToken,
} from '../../state/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {PRIMARY_COLOR} from '../assets/styles/colors';
import {SignIn, SignUp} from '../screens/auth';

const Stack = createStackNavigator();

export const Navigation: React.FC = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const isPreload = useAppSelector(selectAuthIsPreload);

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isPreload ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={() => (
              <Button title="LogOut" onPress={() => dispatch(removeToken())} />
            )}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
