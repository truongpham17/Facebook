import React, { Component } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';


class MainScreen extends Component {
    static navigationOptions = () => ({
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
    state={
        isShow: true
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <Text> Main Screen </Text>
                </View>
            </ScrollView>

        );
    }
}


export default MainScreen;
