import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ValidateScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Validate Screen</Text>
        </View>
      );
    }
}

export default ValidateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    },
  });