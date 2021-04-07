import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  getToken,
  selectAuthIsPreload,
  selectToken,
} from '../../state/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../assets/styles/colors';
import {MyDesk} from '../screens/app/MyDesk';
import {SignIn, SignUp} from '../screens/auth';
import Plus from '../assets/icons/plus.svg';
import styles from '../assets/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DESK_SCREEN, SIGN_IN_SCREEN, SIGN_UP_SCREEN} from './constants';
import {addColumn} from '../../state/columns/columnsSlice';

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
            name={DESK_SCREEN}
            component={MyDesk}
            options={{
              headerTitle: 'My Desk',
              headerTintColor: PRIMARY_TEXT_COLOR,
              headerRight: () => (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    dispatch(addColumn());
                  }}>
                  <Plus width={16} height={16} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={SIGN_IN_SCREEN}
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SIGN_UP_SCREEN}
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
