import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen.js'
import ValidateScreen from './screens/ValidateScreen.js'
import OrderScreen from './screens/OrderScreen'

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
//   Order: {screen: OrderScreen},
//   Validate: {screen: ValidateScreen},
// });

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
          </View>
        )
      }
    },

    Profile: { screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      }
    },

    Validate: { screen: ValidateScreen,
      navigationOptions:{
        tabBarLabel:'Validate',
        tabBarIcon: ({ tintColor }) => (
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
      }
    },
    Order: { screen: OrderScreen,
      navigationOptions:{
        tabBarLabel:'Order',
        tabBarIcon: ({ tintColor }) => (
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
          </View>
        ),
      }
    },
  },
  {  
    initialRouteName: "Home",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
)

export default createAppContainer(TabNavigator);