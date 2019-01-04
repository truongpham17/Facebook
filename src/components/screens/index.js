
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { View } from 'react-native';
import { Header, FloatView } from '../common';
import MainNavigator from './BottomNavigator';
import { observer, inject } from 'mobx-react';
import { CardStory } from '../facebook-components';

const App = createAppContainer(
    createStackNavigator(
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
    )
);
@inject('storyStore')
@observer
class Main extends React.Component {
    render() {
        const { isShowStoryCard, storyInfo } = this.props.storyStore;

        return (
            <View style={{ flex: 1 }}>
                <App /> 
                {
                    isShowStoryCard ? 
                        <FloatView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                            <CardStory 
                                {...storyInfo}
                            />
                        </FloatView> : undefined
                }
                
            </View>
        );
    }
}

export default Main;

