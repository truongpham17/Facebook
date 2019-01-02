import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { HeaderStatus, StoryBoard, OptionMenuDialog } from '../facebook-components';
import { NewsTitle, CommentInput, Reaction, NewsContent, MyListItem, OptionMenu } from '../common';


class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
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
                    <OptionMenuDialog isShow={this.state.isShow} onTouchOutside={() => {this.setState({ isShow: false }); }}/>
                </View>
            </ScrollView>

        );
    }
}


export default MainScreen;
