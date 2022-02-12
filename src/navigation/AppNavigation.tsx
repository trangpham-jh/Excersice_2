import { createStackNavigator } from '@react-navigation/stack';
import SCREEN_NAMES from 'consts/screenNames';
import React from 'react';
import FilmDetailsScreen from 'screens/FilmDetailsScreen';
import TabNavigation from './TabNavigation';

export type StackNavigationParamList = {
  BottomTab: undefined;
  [SCREEN_NAMES.FILM_DETAILS_SCREEN]: {
    id: string;
  };
};

const Stack = createStackNavigator<StackNavigationParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={TabNavigation} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name={SCREEN_NAMES.FILM_DETAILS_SCREEN}
          component={FilmDetailsScreen}
          options={{
            detachPreviousScreen: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;
