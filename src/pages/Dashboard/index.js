import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Layout} from '..';
import {InputComponent} from '../../components';
import {COLORS, FONTS} from '../../constants/theme';
import api from '../../api/services';
import AuthContext from '../../auth/Context';

const Tab = createMaterialTopTabNavigator();

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
  const [vehicleNumber, setVehicleNo] = React.useState(null);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  let vehicle = route.params;
  let TickerPostData = {
    vehicleNo: vehicleNumber,
    employeeId: vehicle.employeeId,
    vehicleType: vehicle.id,
  };

  function submitTicketForm() {
    if (vehicleNumber !== null) {
      api
        .entryVehicle(TickerPostData)
        .then(res => {
          console.log(res.data.data.message);
          setButtonLoading(false);
          ToastAndroid.showWithGravity(
            res.data.data.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          setButtonLoading(false);
          setVehicleNo(null);
        })
        .catch(err => {
          ToastAndroid.showWithGravity(
            err.response.data.error.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          setVehicleNo(null);
          setButtonLoading(false);
        });
    } else {
      ToastAndroid.showWithGravity(
        'Vehicle Number is required',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      setVehicleNo(null);
      setButtonLoading(false);
    }
  }

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
                  onChangeText={text => setVehicleNo(text)}
                  value={vehicleNumber}
                />
                <Button
                  title="Generate"
                  loading={buttonLoading}
                  buttonStyle={{
                    backgroundColor: COLORS.darkGreen,
                    marginTop: 10,
                    borderRadius: 2,
                    paddingVertical: 10,
                  }}
                  titleStyle={{
                    color: COLORS.white,
                  }}
                  onPress={() => {
                    setButtonLoading(true);
                    submitTicketForm();
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

function DateTime() {
  const [dateTime, setDateTime] = React.useState();
  setInterval(function () {
    setDateTime(getDate());
  }, 10000);

  function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let hours = today.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    var time = hours + ':' + today.getMinutes();

    return dd + '/' + mm + '/' + yyyy + '  ' + time + ' ' + ampm;
  }

  return (
    <Text
      style={{
        fontWeight: 'bold',
        color: COLORS.darkTransparent,
      }}>
      {dateTime}
    </Text>
  );
}

const Index = () => {
  const [vehicles, setVehicles] = React.useState([]);
  const [loadingFairs, setLoadingFairs] = React.useState(true);

  console.log(vehicles);
  //Use Effect Hooks
  const authContext = useContext(AuthContext);
  async function getVehicleTypeData() {
    try {
      let response = await api.getVehicleType({
        employeeId: authContext?.user?.id,
      });
      setVehicles(response?.data?.data);
      setLoadingFairs(false);
    } catch (e) {
      setLoadingFairs(false);
      console.error(e);
    }
  }

  React.useEffect(() => {
    getVehicleTypeData();
  }, []);

  console.log(vehicles);
  return (
    <Layout>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              FONTS.h3,
              {fontWeight: 'bold', color: COLORS.darkTransparent},
            ]}>
            Dashboard
          </Text>
          <DateTime />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <View
            style={{
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={[FONTS.h4, {fontWeight: 'bold', color: COLORS.primary}]}>
                {authContext?.user?.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  ToastAndroid.showWithGravity(
                    'Refreshing',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                  );
                  getVehicleTypeData();
                }}>
                <Icon name="refresh" color={COLORS.primary} size={25} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              paddingVertical: 10,
            }}>
            <Text
              style={[
                FONTS.h5,
                {
                  fontWeight: 'bold',
                  color: COLORS.white,
                  backgroundColor: COLORS.green,
                  paddingVertical: 20,
                  elevation: 5,
                  width: '100%',
                  textAlign: 'center',
                },
              ]}>
              Today Collection : {vehicles.totalAmount} RS
            </Text>
          </View>

          {loadingFairs ? (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          ) : vehicles?.fairs.length !== 0 ? (
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
                {vehicles?.fairs?.map(tab => {
                  return (
                    <Tab.Screen
                      key={tab.id}
                      name={tab.vehicle_type}
                      component={TopTabComponent}
                      initialParams={{
                        id: tab.id,
                        employeeId: authContext?.user?.id,
                      }}
                      options={{
                        title: tab.vehicle_type,
                      }}
                    />
                  );
                })}
              </Tab.Navigator>
            </NavigationContainer>
          ) : null}
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
