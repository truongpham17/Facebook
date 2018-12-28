import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/components/screens';
import {View , Text } from 'react-native';
import React from 'react';

const App = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default createAppContainer(AppNavigator);
