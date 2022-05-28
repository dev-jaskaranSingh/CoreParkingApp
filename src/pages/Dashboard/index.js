import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {Layout} from '..';
import {InputComponent} from '../../components';
import {COLORS, FONTS} from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const TABS = [
  {
    id: 1,
    name: 'Mini',
    component: TopTabComponent,
    user: {
      id: 11,
      name: 'User 1',
      collection: '140$',
      inHouseVehicles: 15,
    },
  },
  {
    id: 2,
    name: 'Bus',
    component: TopTabComponent,
    user: {
      id: 12,
      name: 'User 2',
      collection: '134$',
      inHouseVehicles: 25,
    },
  },
];

function Card({title = 'Title', value = 0}) {
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
        {title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 40,
          color: COLORS.primary,
          fontWeight: 'bold',
        }}>
        {value}
      </Text>
    </View>
  );
}

function TopTabComponent({route}) {
  const [image, setImage] = React.useState(null);

  let user = route.params;
  return (
    <Layout>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginBottom: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          />
          <View style={{marginBottom: 60}}>
            <View
              style={{
                paddingHorizontal: 10,
                backgroundColor: COLORS.lightGray,
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={[
                    FONTS.h4,
                    {
                      color: COLORS.primary,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Generate Ticket
                </Text>
              </View>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View
                style={{
                  paddingHorizontal: 15,
                  marginTop: 5,
                }}>
                <InputComponent
                  required={true}
                  label="Vehicle Number"
                  leftIcon="bus"
                />
                <Button
                  title="Generate"
                  buttonStyle={{
                    backgroundColor: COLORS.darkGreen,
                    marginTop: 10,
                    borderRadius: 2,
                    paddingVertical: 10,
                  }}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const Index = () => {
  return (
    <Layout>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}>
          <Text
            style={[
              FONTS.h3,
              {fontWeight: 'bold', color: COLORS.darkTransparent},
            ]}>
            Dashboard
          </Text>
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: COLORS.lightGray,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={FONTS.h4}>Active User</Text>
              <Text
                style={[FONTS.h4, {fontWeight: 'bold', color: COLORS.primary}]}>
                Jaskaran
              </Text>
            </View>
          </View>
          <NavigationContainer independent={true}>
            <Tab.Navigator
              initialRouteName="Parking"
              screenOptions={{
                tabBarStyle: {
                  backgroundColor: COLORS.white,
                },
                tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.darkgray,
                tabBarAllowFontScaling: false,
                tabBarIndicatorStyle: {
                  height: '100%',
                  backgroundColor: COLORS.primary,
                },
                tabBarPressColor: COLORS.primary,
              }}>
              {TABS.map(tab => {
                return (
                  <Tab.Screen
                    key={tab.id}
                    name={tab.name}
                    component={TopTabComponent}
                    initialParams={tab.user}
                    options={{
                      title: tab.name,
                    }}
                  />
                );
              })}
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});

export default Index;
