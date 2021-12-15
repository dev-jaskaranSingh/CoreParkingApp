import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  COLORS
} from './src/constants';
import { AppTabNavigator, navigationTheme } from './src/routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [auth, setAuth] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <NavigationContainer theme={navigationTheme}>
        <AppTabNavigator />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
