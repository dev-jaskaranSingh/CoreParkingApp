import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { COLORS, FONTS } from '../constants';
//Screens
import { Employees } from '../pages';
//Create object for navigation
const Stack = createStackNavigator();

function AppTabStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Employees"
      allowFontScaling={false}
      screenOptions={() => {
        return {
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            ...FONTS.h4,
            color: COLORS.white,
          },
          headerTintColor: COLORS.white,
        };
      }}>
      {/* List of screen components */}

      <Stack.Screen
        name="Employees"
        component={Employees}
        options={{headerShown: false, title: 'Employees'}}
      />


    </Stack.Navigator>
  );
}

export default React.memo(AppTabStackNavigator);