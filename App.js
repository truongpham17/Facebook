import { createAppContainer, SafeAreaView } from 'react-navigation';
import { View, Text, Image, Animated, Easing } from 'react-native';
import React from 'react';
import App from './src/components/screens';
import { FloatView } from './src/components/common';
import { CardStory } from './src/components/facebook-components';
import { Provider } from 'mobx-react';
import stores from './src/components/mobx';


class Main extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <SafeAreaView style={{ flex: 1 }}>
                    <App />
                </SafeAreaView>
            </Provider>
            
        );
    }
}

const Test = () => {
    return (
        <View style={{ flex: 1 }}>
            <FloatView />
        </View>
    );
};

export default Main;
