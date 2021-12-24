import React from 'react';
import {
  Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import ImagePicker from 'react-native-image-crop-picker';
import { InputComponent } from '../../components';
import { COLORS, FONTS } from '../../constants';
import Layout from '../Layout';


const Create = () => {

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


  const [image, setImage] = React.useState(null);

  return (
    <Layout>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              paddingHorizontal: 15,
              marginTop: 5,
            }}>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  marginBottom: 5,
                  borderColor: COLORS.primary,
                  borderWidth: 5,
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                }}
                onPress={() => openCamera()}>
                <Icon
                  name="camera"
                  type="font-awesome-5"
                  size={25}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body1,
                }}>
                Profile Pic
              </Text>
            </View>

            <InputComponent required={true} label="Name" leftIcon="user" />
            <InputComponent
              required={true}
              label="Mobile Number"
              leftIcon="phone"
            />
            <InputComponent
              required={true}
              label="Address"
              leftIcon="home"
              multiline={true}
              numberOfLines={6}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {image !== null ? (
                <Image
                  source={{uri: image}}
                  style={{width: '100%', height: 400}}
                />
              ) : null}
            </View>

            <Button
              title="Take Photo"
              icon={<Icon name="upload" type="font-awesome-5" size={20} color="white" style={{
                marginRight: 10,
              }}/>}
              buttonStyle={{
                backgroundColor: COLORS.darkgray,
                marginTop: 20,
                borderRadius: 15,
                paddingVertical: 12,
              }}
              onPress={() => null}
            />

            <Button
              title="Save"
              buttonStyle={{
                backgroundColor: COLORS.darkGreen,
                marginTop: 10,
                borderRadius: 15,
                paddingVertical: 10,
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Create);
