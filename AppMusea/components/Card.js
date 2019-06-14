import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Card extends React.Component {
    render () {
        return (
            <View style={styles.card}>
                <Image source={require('../assets/placeholder_250_150.jpg')}/>
                <Text style={styles.card__title}>SMAK</Text>
                <Text style={styles.card__description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a elementum urna, non molestie tellus. Fusce et enim et tortor laoreet commodo. Maecenas cursus, lacus id congue fringilla, mi arcu scelerisque justo, at mattis eros lorem vitae augue.
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Order')}
                    title="Bestel tickets"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        marginTop: 20,
        padding: 20,
        width: '100%',
        backgroundColor: '#00aeef',
        borderRadius: 4,
        alignItems: 'center',
    },
});

export default withNavigation(Card);