
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './BottomNavigator';
import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common';

export default createStackNavigator(
    {
        Screen: {
            screen: MainNavigator,
            navigationOptions: {
                header: <Header placeHolder="Search" />
            }
        }
    },
    {
        
    }
   
);
