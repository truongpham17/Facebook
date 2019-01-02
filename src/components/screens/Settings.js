import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common/index';

class MainScreen extends Component {
    static navigationOptions = () => ({
        header: null,
        tabBarIcon: ({ focused }) => (
            focused ? 
            <Image 
                source={require('../img/settings_active.png')} 
                style={{ height: 30, width: 30 }} 
            /> : 
            <Image
                source={require('../img/settings.png')} 
                style={{ height: 30, width: 30 }} 
            />
        )
    });
    render() {
        return (
            <View style={{ flex: 1 }}>
            </View>
        );
    }
}


export default MainScreen;
