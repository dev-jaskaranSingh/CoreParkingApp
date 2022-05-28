import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputComponent} from '../../components';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {COLORS, FONTS} from '../../constants';

const Index = () => {
  return (
    <View style={styles.container}>
      <InputComponent
        required={true}
        label="Bill/Vehicle Number"
        leftIcon="bus"
      />
      <Button
        title="Search"
        buttonStyle={{
          backgroundColor: COLORS.darkGreen,
          marginTop: 10,
          borderRadius: 2,
          paddingVertical: 8,
        }}
      />

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
          }}>
          <Text style={[FONTS.h4, {fontWeight: 'bold', color: COLORS.primary}]}>
            Ticker Details
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10
          }}>
          <Text style={[FONTS.h4, {color: COLORS.primary}]}>
            Bill Number
          </Text>
          <Text style={[FONTS.h4, {color: COLORS.darkTransparentk}]}>
            432423
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginTop:15
          }}>
          <Text style={[FONTS.h4, {color: COLORS.primary}]}>
            Vehicle Number
          </Text>
          <Text style={[FONTS.h4, {color: COLORS.darkTransparentk}]}>
            PB02-1234
          </Text>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginTop:15
          }}>
          <Text style={[FONTS.h4, {color: COLORS.primary}]}>
            Vehicle Type
          </Text>
          <Text style={[FONTS.h4, {color: COLORS.darkTransparentk}]}>
            Mini
          </Text>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginTop:15
          }}>
          <Text style={[FONTS.h4, {color: COLORS.primary}]}>
            In date and time
          </Text>
          <Text style={[FONTS.h4, {color: COLORS.darkTransparentk}]}>
            12/12/2020 12:12 PM
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginTop:15
          }}>
          <Text style={[FONTS.h4, {color: COLORS.primary}]}>
            Amount
          </Text>
          <Text style={[FONTS.h4, {color: COLORS.darkTransparentk}]}>
            12,00 Rs
          </Text>
        </View>
      </View>

      <Button
        title="Print"
        buttonStyle={{
          backgroundColor: COLORS.primary,
          marginTop: 20,
          borderRadius: 2,
          paddingVertical: 8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Index;
