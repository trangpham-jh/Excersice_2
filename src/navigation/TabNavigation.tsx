import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderBackButton } from '@react-navigation/elements';
import SCREEN_NAMES from 'consts/screenNames';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from 'screens/HomeScreen';
import InboxScreen from 'screens/InboxScreen';
import ProfileScreen from 'screens/ProfileScreen';
import TermsScreen from 'screens/TermsScreen';

export type BottomTabNavigationParamList = {
  [SCREEN_NAMES.HOME_SCREEN]: undefined;
  ProfilePage: undefined;
  TermsPage: undefined;
  InboxPage: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN_NAMES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Home Page',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options={{
          title: 'Profile Page',
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="TermsPage"
        component={TermsScreen}
        options={({ navigation }) => ({
          title: 'Terms Page',
          tabBarVisible: false,
          tabBarButton: () => null,
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.navigate('ProfilePage')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="InboxPage"
        component={InboxScreen}
        options={{
          title: 'Inbox Page',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
