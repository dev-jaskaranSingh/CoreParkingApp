import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Layout } from '..';
import { InputComponent } from '../../components';
import { COLORS, FONTS } from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const TABS = [
  {
    id: 1,
    name: 'Parking 1',
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
    name: 'Parking 2',
    component: TopTabComponent,
    user: {
      id: 12,
      name: 'User 2',
      collection: '134$',
      inHouseVehicles: 25,
    },
  },
  {
    id: 3,
    name: 'Parking 3',
    component: TopTabComponent,
    user: {
      id: 13,
      name: 'User 3',
      collection: '174$',
      inHouseVehicles: 95,
    },
  },
  {
    id: 4,
    name: 'Parking 4',
    component: TopTabComponent,
    user: {
      id: 14,
      name: 'User 4',
      collection: '114$',
      inHouseVehicles: 55,
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

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      // includeBase64: true,
      compressImageQuality: 0.5,
      compressImageMaxHeight: 400,
      compressImageMaxWidth: 400,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
        // setUri(image.path);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(image);

  return (
    <Layout>
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
          <Text style={[FONTS.h4, {fontWeight: 'bold', color: COLORS.primary}]}>
            {user.name}
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginBottom: 30,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Card title="Today's Collection" value={user.collection} />
            <Card title="In House Vehicles" value={user.inHouseVehicles} />
          </View>
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
                <InputComponent
                  required={true}
                  label="Mobile Number"
                  leftIcon="phone"
                />
                <View style={{flexDirection: 'row', justifyContent: 'center',alignItems:'center'}}>
                  {image !== null ? (
                    <Image
                      source={{uri: image}}
                      style={{width: '100%', height: 400}}
                    />
                  ) : null}
                </View>

                <Button
                  title="Take Photo"
                  icon={<Icon name="camera" size={25} color="white" />}
                  buttonStyle={{
                    backgroundColor: COLORS.darkgray,
                    marginTop: 20,
                    borderRadius: 15,
                    paddingVertical: 8,
                  }}
                  onPress={() => openCamera()}
                />

                <Button
                  title="Generate"
                  buttonStyle={{
                    backgroundColor: COLORS.darkGreen,
                    marginTop: 10,
                    borderRadius: 15,
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
          <NavigationContainer independent={true}>
            <Tab.Navigator
              initialRouteName="Parking"
              screenOptions={{
                tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
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
