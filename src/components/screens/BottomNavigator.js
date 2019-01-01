// @flow
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import MainScreen from './MainScreen';
import SearchGroup from './SearchGroup';
import SearchVideo from './SearchVideo';
import Notification from './Notification';
import Setting from './Settings';
import Profile from './Profile';

export default createMaterialBottomTabNavigator({
    News: { 
        screen: MainScreen,
    },
    SearchGroup: {
        screen: SearchGroup,
    },
    SearchVideo: {
        screen: SearchVideo
    },
    Profile: {
        screen: Profile
    },
    Notification: {
        screen: Notification
    },
    Setting: {
        screen: Setting
    }
}, {
    labeled: false,
    backBehavior: true,
    tabBarColor: '#F7F7F7',
    barStyle: { 
        backgroundColor: '#F7F7F7', 
        height: 46, 
        justifyContent: 'center',
    },
   
});

