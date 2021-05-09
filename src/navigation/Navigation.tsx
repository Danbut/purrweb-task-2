import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  logout,
  selectAuthIsPreload,
  selectName,
  selectToken,
} from '../state/ducks/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../state/hooks';
import {Desk} from '../screens/app/Desk/Desk';
import {SignIn, SignUp} from '../screens/auth';
import {
  COLUMN_SCREEN,
  DESK_SCREEN,
  MY_PRAYERS_TAB,
  PRAYER_DETAILS_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  SUBSCRIBED_TAB,
} from './constants';
import {addColumn, selectColumnById} from '../state/ducks/columns/columnsSlice';
import {Cards} from '../screens/app/Prayers/Prayers';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LogoutIcon, PlusIcon, PrayerIcon, SettingsIcon} from '../ui';
import {PrayerDetails} from '../screens/app/PrayerDetails/PrayerDetails';
import {IColumn} from '../interfaces/IColumn';
import {IPrayer} from '../interfaces/IPrayer';
import {RootState} from '../state/store';
import styled, {ThemeContext} from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

export const Navigation: React.FC = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const isPreload = useAppSelector(selectAuthIsPreload);
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      {isPreload ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : token ? (
        <Stack.Navigator>
          <Stack.Screen
            name={DESK_SCREEN}
            component={Desk}
            options={{
              headerTitle: 'My Desk',
              headerTintColor: theme.colors.text.primary,
              headerRight: () => (
                <IconButton
                  onPress={() => {
                    dispatch(addColumn());
                  }}>
                  <PlusIcon width={16} height={16} />
                </IconButton>
              ),
              headerLeft: () => (
                <IconButton
                  onPress={() => {
                    dispatch(logout());
                  }}>
                  <LogoutIcon width={24} height={24} />
                </IconButton>
              ),
            }}
          />
          <Stack.Screen
            name={COLUMN_SCREEN}
            component={() => {
              const route = useRoute();
              //TODO: add badge
              return (
                <Tab.Navigator
                  tabBarOptions={{
                    activeTintColor: theme.colors.primary,
                    inactiveTintColor: theme.colors.text.secondary,
                    labelStyle: {fontSize: theme.size.secondary},
                    indicatorStyle: {
                      backgroundColor: theme.colors.primary,
                    },
                  }}>
                  <Tab.Screen
                    name={MY_PRAYERS_TAB}
                    component={() => <Cards column={route.params as IColumn} />}
                  />
                  <Tab.Screen
                    name={SUBSCRIBED_TAB}
                    component={() => <Cards column={route.params as IColumn} />}
                  />
                </Tab.Navigator>
              );
            }}
            options={({route}) => ({
              headerTitle: (route.params as IColumn).title,
              headerTintColor: theme.colors.text.primary,
              headerRight: () => (
                <IconButton>
                  <SettingsIcon width={24} height={24} />
                </IconButton>
              ),
              //TODO: change backbutton color
              headerBackTitleVisible: false,
            })}></Stack.Screen>
          <Stack.Screen
            name={PRAYER_DETAILS_SCREEN}
            component={PrayerDetails}
            //TODO: make prominent appbar
            options={({route}) => ({
              headerTitle: () => {
                const column = useAppSelector((state: RootState) =>
                  selectColumnById(state, (route.params as IPrayer).columnId),
                );
                const user = useAppSelector(selectName);
                return (
                  <>
                    <Title>{(route.params as IPrayer).title}</Title>
                    <Title>
                      in {column?.title} by {user}
                    </Title>
                  </>
                );
              },
              headerStyle: {backgroundColor: theme.colors.secondary},
              headerRight: () => (
                <IconButton>
                  <PrayerIcon
                    width={24}
                    height={24}
                    color={theme.colors.white}
                  />
                </IconButton>
              ),
              headerBackTitleVisible: false,
              headerTintColor: theme.colors.white,
            })}
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

const IconButton = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spaces.container}px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
`;
