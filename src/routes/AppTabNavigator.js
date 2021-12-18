import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    COLORS
} from '../constants';
//Screens
import {
    Account, Dashboard, Employees,
    Report
} from '../pages';
import navigation from './rootNavigator';

const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {

function drawerButton(color, size) {
    console.log(navigation)
  return (
    <TouchableOpacity
      onPress={() => {  navigation.openDrawer()  }}
      style={{
        paddingHorizontal: 20,
      }}
>
      <Icon name="bars" type="font-awesome" size={size} color={color} />
    </TouchableOpacity>
  );
}


    
    return (
        <Tab.Navigator
            initialRouteName="  "
            allowFontScaling={false}
            animationEnabled
            screenOptions={{
                tabBarStyle: { position: 'absolute',height:60,paddingBottom:5,elevation:0,backgroundColor:COLORS.white,borderTopWidth:0,shadowColor: 'transparent',shadowOpacity: 0,shadowRadius: 0,shadowOffset: { height: 0, width: 0 }, },
                allowFontScaling: false,
                animationEnabled: true,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: '#bababa',
                showLabel: true,
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: COLORS.white,
                },
                headerTitleStyle: {
                    color: COLORS.primary,
                },
                headerTintColor: COLORS.primary,
                headerLeft: () => {
                    return drawerButton(COLORS.primary, 30);
                },
            }}
            >
            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{
                    tabBarIcon: function ({ size, color }) {
                        return <Icon name="home" size={size * 1.2} color={color} />;
                    },
                }}
            />
            <Tab.Screen name="Report" component={Report} 
                options={{
                    tabBarIcon: function ({ size, color }) {
                        return <Icon name="book" size={size * 1.2} color={color} />;
                    },

                }}/>
                <Tab.Screen name="Account" component={Account} 
                    options={{
                        tabBarIcon: function ({ size, color }) {
                            return <Icon name="user" size={size * 1.2} color={color} />;
                        },
                    }}
                />
            <Tab.Screen name="Employees" component={Employees}
                options={{
                    tabBarIcon: function ({ size, color }) {
                        return <Icon name="users" size={size * 1.2} color={color} />;
                    },
                }} />
        </Tab.Navigator>
    );
}
