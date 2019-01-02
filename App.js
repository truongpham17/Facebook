import { createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';
import React from 'react';
import AppNavigator from './src/components/screens';
import { SafeAreaView} from 'react-navigation';


const App = createAppContainer(AppNavigator);

class Main extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <App />
            </SafeAreaView>
        );
    }
}

export default Main;
