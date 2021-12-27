import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Layout } from '..';
import { COLORS } from '../../constants';

const DUMMY_EMPLOYEES = [
  {
    id: 1,
    name: 'Employee 1',
    parking: 'Parking 1',
  },
  {
    id: 2,
    name: 'Employee 2',
    parking: 'Parking 2',
  },
  {
    id: 3,
    name: 'Employee 3',
    parking: 'Parking 3',
  },
  {
    id: 4,
    name: 'Employee 4',
    parking: 'Parking 4',
  },
  {
    id: 5,
    name: 'Employee 5',
    parking: 'Parking 5',
  },
  {
    id: 6,
    name: 'Employee 6',
    parking: 'Parking 6',
  },
];

const Index = ({navigation}) => {
  function renderListHeader() {
    return (
      <View style={{margin: 15}}>
        <Button
          buttonStyle={{
            backgroundColor: COLORS.darkGreen,
            borderWidth: 2,
            borderColor: 'white',
            paddingHorizontal: 15,
            borderRadius: 18,
          }}
          title="Create New Employee"
          onPress={() => navigation.navigate('Create')}
        />
      </View>
    );
  }

  function renderEmployeeComponent({item}) {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={COLORS.primary}
        onPress={() => console.log('Pressed!')}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <View>
              <Text>{item.parking}</Text>
            </View>
          </ListItem.Content>

          <ListItem.Content
            style={{
              marginLeft: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: 'white',
                paddingHorizontal: 15,
                borderRadius: 18,
              }}
              title="Edit"
              onPress={() => navigation.navigate('Edit', {id: item.id})}
            />

            <Button
              buttonStyle={{
                backgroundColor: COLORS.orange,
                borderWidth: 2,
                borderColor: 'white',
                paddingHorizontal: 15,
                borderRadius: 18,
              }}
              title="Details"
              onPress={() => navigation.navigate('Details', {id: item.id})}
            />
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  }

  return (
    <Layout>
      <FlatList
        data={DUMMY_EMPLOYEES}
        renderItem={renderEmployeeComponent}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderListHeader}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Index;
