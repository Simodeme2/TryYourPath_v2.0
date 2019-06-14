import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Profiel</Text>
          <View style={styles.profile}>
            <Text>Simon Demeyere</Text>
            <Image source={require('../assets/profile-placeholder_150_250.jpg')}/>
            <Text>Simodeme2@student.arteveldehs.be</Text>
          </View>
        </View>
      );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    }, 
  });