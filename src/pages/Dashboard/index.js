import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

function Card() {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGray,
        padding: 20,
        marginTop: 10,
        width: '45%',
        borderRadius: 15,
        elevation: 2,
        alignItems: 'center',
      }}>
      <Text
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          width: 150,
          borderRadius: 10,
          color: COLORS.white,
        }}>
        Today's Collection
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 40,
          color: COLORS.primary,
          fontWeight: 'bold',
        }}>
        10$
      </Text>
    </View>
  );
}

function TopTabComponent() {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: COLORS.lightGray,
          marginVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={FONTS.h4}>Active User</Text>
          <Text style={FONTS.h4}>User Name</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Card />
        <Card />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: COLORS.lightGray,
          marginVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'flex-start',
          }}>
          <Text style={[FONTS.h4,{
          color: COLORS.primary,
          fontWeight: 'bold',
          }]}>Generate Ticket</Text>
        </View>
      </View>
    </View>
  );
}

const Index = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <Text style={FONTS.h3}>Dashboard</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName="Parking"
            screenOptions={{
              tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
              tabBarStyle: {backgroundColor: 'white', elevation: 0},
              tabBarActiveTintColor: COLORS.white,
              tabBarInactiveTintColor: COLORS.darkgray,
              tabBarAllowFontScaling: false,
              tabBarItemStyle: {width: 120},
              tabBarScrollEnabled: true,
              swipeEnabled: true,
              tabBarIndicatorStyle: {
                height: '100%',
                backgroundColor: COLORS.primary,
                borderRadius: 100,
              },
            }}>
            <Tab.Screen
              name="Parking"
              component={TopTabComponent}
              options={{
                title: 'Parking',
              }}
            />
            <Tab.Screen
              name="Test2"
              component={TopTabComponent}
              options={{
                title: 'Parking 2',
              }}
            />
            <Tab.Screen
              name="Test3"
              component={TopTabComponent}
              options={{
                title: 'Parking 3',
              }}
            />
            <Tab.Screen
              name="Test4"
              component={TopTabComponent}
              options={{
                title: 'Parking 4',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});

export default Index;
