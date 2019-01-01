import { createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import AppNavigator from './src/components/screens';


const App = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default createAppContainer(AppNavigator);
