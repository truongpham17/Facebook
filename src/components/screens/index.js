
import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Header } from '../common';
import MainNavigator from './BottomNavigator';

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
