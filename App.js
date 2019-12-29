// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RootStack} from './src/screens/index'
import { Provider } from 'react-redux';
import { Store } from './src/Store';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import DisplayScreen from './src/screens/DisplayScreen';
import SearchScreen from './src/screens/SearchScreen';

// import React, { Component } from 'react'
// import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search Images'
            }
        },
        Display: {
            screen: DisplayScreen,
            navigationOptions: {
                title: 'Images'
            }
        },
    },
    {
        initialRouteName: 'Search'
    }
    );
    const AppContainer = createAppContainer(RootStack)




export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      
      <AppContainer />
      
      </Provider>
    );
  }
}





// import {createAppContainer } from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack'
// import HomeScreen from '../screens/HomeScreen';
// import ResultScreen from '../screens/ResultScreen'
 
// const Navigator = createStackNavigator({
//     Home:HomeScreen,
//     Result:ResultScreen
// })

 
// export default createAppContainer(Navigator)
