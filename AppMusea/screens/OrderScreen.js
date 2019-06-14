import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements'

class OrderScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Tickets bestellen</Text>
          <View style={styles.form}>
            <View style={styles.formInput}>
              <Input
                placeholder='Naam'
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='black'
                  />
                }
              />
            </View>
            <View style={styles.formInput}>
              <Input
                placeholder='Aantal tickets'
                leftIcon={
                  <Icon
                    raised
                    name='ticket'
                    type='font-awesome'
                    size={24}
                    color='black'
                  />
                }
              />
            </View>
            <Button title="Tickets bestellen"></Button>
            
          </View>
        </View>
      );
    }
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 0,
  },
});