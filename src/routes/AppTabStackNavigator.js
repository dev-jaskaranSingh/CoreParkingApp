import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { COLORS, FONTS } from '../constants';
//Screens
import {
  EmployeeCreate, EmployeeDetails, EmployeeEdit, Employees
} from '../pages';
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
      <Stack.Screen
        name="Create"
        component={EmployeeCreate}
        options={{headerShown: false, title: 'Employee Create'}}
      />
      <Stack.Screen
        name="Edit"
        component={EmployeeEdit}
        options={{headerShown: false, title: 'Employee Edit'}}
      />
      <Stack.Screen
        name="Details"
        component={EmployeeDetails}
        options={{headerShown: false, title: 'Employee Details'}}
      />
    </Stack.Navigator>
  );
}

export default React.memo(AppTabStackNavigator);
