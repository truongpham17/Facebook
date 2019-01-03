import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import { NewsFeed, StoryBoard, HeaderStatus, CardStory } from '../facebook-components';
import { HeaderIcon, FloatView } from '../common';
import { observer, inject } from 'mobx-react';

type Props = {
    numberOfNotification: number,
    storyStore: any
}

@inject('storyStore')
@observer
class MainScreen extends Component<Props> {
    static navigationOptions = () => ({
        tabBarIcon: ({ focused }) => (
            <HeaderIcon 
                icon={focused ? require('../img/new_feed_active.png') : require('../img/new_feed.png')}
                numberOfNotification={8}
            />
        )
    });
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
    }

    onCardPress(avatar, contentImg, time, title) {
        this.cardStoryInfo = { avatar, contentImg, time, title }; 
        this.setState({ isShowCardStory: true });
        console.log('success!!!');
    }
  
    render() {
        const { isShowStoryCard, storyInfo } = this.props.storyStore; 
        return (
            <ScrollView style={{ flex: 1 }}>
                <HeaderStatus />
                <StoryBoard 
                    data={[
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Add to story',
                            time: '10 hrs'
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Truong Pham',
                            isHaveCurve: true,
                            time: '10 hrs'
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Add to story',
                            time: '10 hrs'
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Truong Pham',
                            isHaveCurve: true,
                            time: '10 hrs'
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Add to story',
                            time: '10 hrs'
                        },
                        {
                            avatar: require('../img/avatar.png'),
                            storyImg: require('../img/avatar.png'),
                            footer: 'Truong Pham',
                            isHaveCurve: true,
                            time: '10 hrs'
                        }
                    ]}
                />
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <NewsFeed
                        avatar={require('../img/avatar.png')}
                        title="Truong Pham tagged Nguyen Thi Ngoc Phuonggg"
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
                {isShowStoryCard ? 
                    <FloatView>
                        <CardStory 
                            {...storyInfo}
                        />
                    </FloatView> : undefined
                }
            </ScrollView>

        );
    }
}


export default MainScreen;
