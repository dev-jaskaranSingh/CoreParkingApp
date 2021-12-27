import React, { useContext } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AuthContext from '../../auth/Context';
import { Button, InputComponent } from '../../components';
import { COLORS, FONTS, images, responsiveHeight, SIZES } from '../../constants';
import Layout from '../Layout';

export default function index({navigation}) {
  //Deceleration Of Context
  const authContext = useContext(AuthContext);

  //Component Renders
  function renderButtons() {
    return (
      <View style={styles.center}>
        {/* button for signIn  */}
        <Button
          height={responsiveHeight(6)}
          width="100%"
          title="Login"
          titleColor="white"
          backgroundColor={COLORS.primary}
          onPress={() => {
            authContext.setUser({name: 'Jaskaran Singh', auth: true});
            console.log('Sign In');
          }}
        />
      </View>
    );
  }

  function renderSignText() {
    return (
      <View
        style={{
          paddingBottom: SIZES.padding * 2,
          marginBottom: 20,
          marginTop: 25,
        }}>
        <Text style={styles.welcome}>Login In</Text>
        <Text style={styles.loremIpsum}>Hi there! Nice to see you</Text>
      </View>
    );
  }

  function renderLogo() {
    return (
      <View style={styles.center}>
        {/* Logo */}
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            height: 250,
            width: 250,
          }}
        />
      </View>
    );
  }

  function renderInputFields() {
    return (
      <View behavior="position" style={{paddingBottom: SIZES.padding * 2}}>
        {/* email */}
        <InputComponent
          placeholder=""
          label="Mobile Number"
          required
          value={null}
          onChangeText={value => console.log(value)}
        />

        {/* Password */}
        <InputComponent
          placeholder="password"
          label="Password"
          isPassword={true}
          value={null}
          required
          onChangeText={value => console.log(value)}
        />
      </View>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        {/* Logo */}
        {renderLogo()}
        <ScrollView>
          {/* Sign Text */}
          {renderSignText()}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {/* Text Input */}
            {renderInputFields()}

            {/* buttons */}
            {renderButtons()}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 3,
    paddingTop: SIZES.padding * 2,
  },
  welcome: {
    ...FONTS.h2,
    color: COLORS.primary,
    opacity: 0.85,
    fontWeight: 'bold',
  },
  loremIpsum: {
    ...FONTS.h5,
    color: COLORS.darkgray,
    opacity: 0.8,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
