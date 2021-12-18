import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Icon } from 'react-native-elements';
import {
  COLORS
} from '../constants';
import { Account } from '../pages';
import {
  AppTabNavigator
} from '../routes';

const Drawer = createDrawerNavigator();

export default function AppDrawerNavigator() {
  return (
          <Drawer.Navigator
            initialRouteName="Dashboard"
            allowFontScaling={false}
            animationEnabled
            screenOptions={({ navigation, route }) => ({
              headerShown: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTitleStyle: {
                color: COLORS.white,
              },
              headerTintColor: COLORS.white,
            })}>
            <Drawer.Screen
              name="Dashboard"
              component={AppTabNavigator}
              options={{
                title: 'Home',
                drawerIcon: ({ focused, size, color }) => (
                  <Icon name="home" type="entypo" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Account"
              component={Account}
              options={{
                title: 'Account',
                drawerIcon: ({focused, size, color}) => (
                  <Icon name="user" type="entypo" size={size} color={color} />
                ),
              }}
            />

          </Drawer.Navigator>
  );
}
