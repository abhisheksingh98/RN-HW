import React, { Component } from 'react'
// import { createStackNavigator } from 'react-navigation'

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

 
import DisplayScreen from './DisplayScreen';
import SearchScreen from './SearchScreen';


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
    export default createAppContainer(RootStack)