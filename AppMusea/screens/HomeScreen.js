import React from 'react';
import { StyleSheet, Text, View, Button , Image, ScrollView } from 'react-native';

import Card from '../components/Card';

class HomeScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Overzicht</Text>
            <ScrollView style={styles.content}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ScrollView>
        </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    },
    title: {
        alignItems: 'center',

    }
  });