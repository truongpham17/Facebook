import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { HeaderStatus, StoryBoard } from '../facebook-components';
import { NewsTitle, CommentInput, Reaction, NewsContent } from '../common';


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
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <HeaderStatus />
                    <StoryBoard />
                    
                    <NewsTitle
                        avatar={require('../img/avatar.png')}
                        title="Truong Pham added news photo"
                        time="30 mins"
                        icon={require('../img/groups.png')}
                    />
                    <Reaction
                        reaction={[require('../img/groups.png'), require('../img/messenger.png')]}
                        description="Truong Pham and 31 others"
                        comment="12 comments"
                    />
                    <CommentInput avatar={require('../img/avatar.png')} /> 
                    <NewsContent
                        status={`#j2team_share\nBitcoin dưới góc nhìn của Dev, tìm hiểu công nghệ bên tầng dưới bitcoin protocol.\nCác private key, public key là ngẫu nhiên hay có quy luật?`}
                        content={[
                            <Image source={require('../img/avatar.png')}  style={{ flex: 1, height: undefined, width: undefined }} />,
                            <Image source={require('../img/avatar.png')}  style={{ flex: 1, height: undefined, width: undefined }} />
                        ]}
                    />
                   
                </View>
            </ScrollView>

        );
    }
}


export default MainScreen;
