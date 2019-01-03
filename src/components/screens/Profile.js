import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { HeaderIcon } from '../common';

class MainScreen extends Component {
    static navigationOptions = () => ({
        header: null,
        tabBarIcon: ({ focused }) => (
            <HeaderIcon 
                icon={focused ? require('../img/profile_active.png') : require('../img/profile.png')}
                numberOfNotification={8}
            />
        )
    });
    render() {
        return (
            <View style={{ flex: 1, marginTop: 36 }}>
            </View>
        );
    }
}


export default MainScreen;
