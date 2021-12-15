import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    COLORS
} from '../constants';
//Screens
import {
    Account,
    Dashboard,
    Employees,
    Report
} from '../pages';

const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            allowFontScaling={false}
            animationEnabled
            screenOptions={{
                tabBarStyle: { position: 'absolute',height:60,paddingBottom:5 },
                allowFontScaling: false,
                animationEnabled: true,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: '#bababa',
                showLabel: true,
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
