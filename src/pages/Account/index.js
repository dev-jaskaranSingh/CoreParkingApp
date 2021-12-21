import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { COLORS, FONTS } from '../../constants';
import Layout from '../Layout';

function ListItem({label,value}){
    return(<View>
  <Text style={[FONTS.body2, {marginBottom: 10}]}>{label}</Text>
  <View
    style={{
      backgroundColor: COLORS.lightGray,
      borderRadius: 10,
      padding: 5,
      marginBottom: 15,
    }}>
    <Text style={[FONTS.body3, {marginBottom: 10, color: COLORS.darkgray}]}>
      {value}
    </Text>
  </View>
</View>
);
}

const Index = () => {
    return (
        <Layout>
            <View style={{
                paddingHorizontal:15
            }}>
                <View style={{
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingVertical:30,
                }}>
                    <Image source={{ 
                        uri:"https://avatars.githubusercontent.com/u/42887065?v=4"
                    }} style={{
                        width:100,
                        height:100,
                        borderRadius:100,
                    }}/>
                    <Text style={[FONTS.body2,{marginTop:10}]}>AdminProfilePic</Text>
                </View>
                

                <ListItem label="Name" value="Jaskaran Singh"/>
                <ListItem label="Mobile" value="9530654704" />
                <ListItem label="Email" value="jaskaransingh4704@gmail.com" />
                <View style={{marginTop:25}}>
                    <Button title="Logout" buttonStyle={{
                        borderRadius:20,
                        paddingVertical:12,
                        backgroundColor:COLORS.red,
                    }}/>
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

})

export default Index;
