import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {
  COLORS
} from '../constants';
import {
  AppTabNavigator
} from '../routes';


function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingHorizontal:15,
            backgroundColor: COLORS.lightGray,
            paddingVertical: 15,
          }}>
            <TouchableOpacity style={{
              height:30,
              width:30,
              backgroundColor: COLORS.gray,
              borderRadius:100,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:10,
            }} onPress={() => props.navigation.closeDrawer() }>
              <Icon name="times" type="font-awesome-5" color={COLORS.darkgray} size={18}/>
            </TouchableOpacity>
            <View style={{
              paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <View>
                <Text>John Doe</Text>
                <Text>example@email.com</Text>
              </View>
              <Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/42887065?v=4',
                }}
                style={{width: 60, height: 60, borderRadius: 30}}
              />
            </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: COLORS.lightGray,
          padding: 20,
          }}>

      <Button title="Logout" buttonStyle={{
        backgroundColor: COLORS.red,
        borderRadius:15,
      }} />
      
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 20,
      }}>
        <Text style={{ color:COLORS.darkTransparent}}>version</Text>
        <Text style={{ color:COLORS.darkTransparent}}>1.0.0</Text>
      </View>
      
      </View >
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function AppDrawerNavigator() {
  const dimensions = useWindowDimensions();

  return (
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Dashboard"
            allowFontScaling={false}
            animationEnabled
            screenOptions={({ navigation, route }) => ({
              drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
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
          </Drawer.Navigator>
  );
}
