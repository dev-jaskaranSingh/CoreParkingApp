import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import AuthContext from './src/auth/Context';
import {COLORS} from './src/constants';
import {
  AppDrawerNavigator,
  AuthNavigator,
  navigationRef,
  navigationTheme,
} from './src/routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} />
        <NavigationContainer theme={navigationTheme} ref={navigationRef}>
          {user ? <AppDrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </View>
    </AuthContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
