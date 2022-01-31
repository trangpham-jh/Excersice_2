/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TermsScreen from './src/screens/TermsScreen';
import InboxScreen from './src/screens/InboxScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomePage"
          component={HomeScreen}
          options={{
            title: 'Home Page',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={ProfileScreen}
          options={{
            title: 'Profile Page',
            tabBarIcon: ({color}) => (
              <Icon name="account-box" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="TermsPage"
          component={TermsScreen}
          options={({navigation}) => ({
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
            tabBarIcon: ({color}) => (
              <Icon name="notifications" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
