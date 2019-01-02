import React, { Component } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { NewsFeed, StoryBoard, HeaderStatus } from '../facebook-components';


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
                <HeaderStatus />
                <StoryBoard 
                    data={[
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Add to story',
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Truong Pham',
                            isHaveCurve: true
                        }
                    ]}
                />
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <NewsFeed
                        avatar={require('../img/avatar.png')}
                        title="Truong Pham tagged Nguyen Thi Ngoc Phuong"
                        time="2 Jan 2018 · "
                        icon={require('../img/groups.png')}
                        status="Ve Go Cong la di uong sua"
                        content={[
                            require('../img/avatar.png'), 
                            require('../img/avatar.png'),
                        ]}
                        reaction={[
                            require('../img/groups.png'),
                            require('../img/messenger.png')
                        ]}
                        nameReaction='Nguyen Thi Ngoc Phuong and 32 others'
                        commentReaction="8 comments"
                    />

                </View>
            </ScrollView>

        );
    }
}


export default MainScreen;
