import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  logout,
  selectAuthIsPreload,
  selectToken,
} from '../../state/ducks/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {MyDesk} from '../screens/app/MyDesk';
import {SignIn, SignUp} from '../screens/auth';
import {
  styles,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  SECONDARY_TEXT_SIZE,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  COLUMN_SCREEN,
  DESK_SCREEN,
  MY_PRAYERS_TAB,
  PRAYER_DETAILS_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  SUBSCRIBED_TAB,
} from './constants';
import {addColumn} from '../../state/ducks/columns/columnsSlice';
import {Cards} from '../screens/app/Cards';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PlusIcon, PrayerIcon, SettingsIcon} from '../ui';
import {PrayerDetails} from '../screens/app/PrayerDetails/PrayerDetails';
import {IColumn} from '../../interfaces/IColumn';
import {IPrayer} from '../../interfaces/IPrayer';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

export const Navigation: React.FC = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const isPreload = useAppSelector(selectAuthIsPreload);

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
              const route = useRoute();
              //TODO: add badge
              return (
                <Tab.Navigator
                  tabBarOptions={{
                    activeTintColor: PRIMARY_COLOR,
                    inactiveTintColor: SECONDARY_TEXT_COLOR,
                    labelStyle: {fontSize: SECONDARY_TEXT_SIZE},
                    indicatorStyle: {
                      backgroundColor: PRIMARY_COLOR,
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
              headerTintColor: PRIMARY_TEXT_COLOR,
              headerRight: () => (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    dispatch(logout());
                  }}>
                  <SettingsIcon width={24} height={24} />
                </TouchableOpacity>
              ),
              //TODO: change backbutton color
              headerBackTitleVisible: false,
            })}></Stack.Screen>
          <Stack.Screen
            name={PRAYER_DETAILS_SCREEN}
            component={PrayerDetails}
            //TODO: make prominent appbar
            options={({route}) => ({
              headerTitle: (route.params as IPrayer).title,
              headerStyle: {backgroundColor: SECONDARY_COLOR},
              headerRight: () => (
                <TouchableOpacity style={styles.icon} onPress={() => {}}>
                  <PrayerIcon width={24} height={24} color={WHITE_COLOR} />
                </TouchableOpacity>
              ),
              headerBackTitleVisible: false,
              headerTintColor: WHITE_COLOR,
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
