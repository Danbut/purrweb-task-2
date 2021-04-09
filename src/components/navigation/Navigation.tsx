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
import {MyDesk} from '../screens/app/MyDesk';
import {SignIn, SignUp} from '../screens/auth';
import {styles, PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  COLUMN_SCREEN,
  DESK_SCREEN,
  MY_PRAYERS_TAB,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  SUBSCRIBED_TAB,
} from './constants';
import {addColumn} from '../../state/columns/columnsSlice';
import {Cards} from '../screens/app/Cards';
import {IColumn} from '../../entities/Column';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PlusIcon, SettingsIcon} from '../ui';

const Tab = createMaterialTopTabNavigator();

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
                  <PlusIcon width={16} height={16} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name={COLUMN_SCREEN}
            component={() => {
              return (
                <Tab.Navigator>
                  <Tab.Screen name={MY_PRAYERS_TAB} component={Cards} />
                  <Tab.Screen name={SUBSCRIBED_TAB} component={Cards} />
                </Tab.Navigator>
              );
            }}
            options={({route}) => ({
              headerTitle: (route.params as IColumn).title,
              headerTintColor: PRIMARY_TEXT_COLOR,
              headerRight: () => (
                <TouchableOpacity style={styles.icon} onPress={() => {}}>
                  <SettingsIcon width={24} height={24} />
                </TouchableOpacity>
              ),
            })}></Stack.Screen>
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
