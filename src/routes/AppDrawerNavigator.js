import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Icon } from 'react-native-elements';
import {
  COLORS
} from '../constants';
//Screens
import {
  Dashboard
} from '../pages';


const Drawer = createDrawerNavigator();
export default function AppDrawerNavigator() {
  return (
          <Drawer.Navigator
            initialRouteName="Home"
            allowFontScaling={false}
            screenOptions={({ navigation, route }) => ({
              headerShown: true,
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
              name="Home"
              component={Dashboard}
              options={{
                title: 'Home',
                drawerIcon: ({ focused, size, color }) => (
                  <Icon name="bar-graph" type="entypo" size={size} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
  );
}
