import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header, TextInput } from '../common/';
import { Avatar } from 'react-native-elements';
import { HeaderStatus, StoryBoard } from '../facebook-components';

class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarIcon: ({ focused }) => (
            focused ? 
            <Image 
                source={require('../img/new_feed_active.png')} 
                style={{ height: 30, width: 30 }} 
            /> : 
            <Image
                source={require('../img/new_feed.png')} 
                style={{ height: 30, width: 30 }} 
            />
        )
    });
    render() {
        return (
            <View style={{ flex: 1, marginTop: 36 }}>
                <Header placeHolder='Search' />
                <HeaderStatus />
                <StoryBoard />
            </View>
        );
    }
}


export default MainScreen;
