import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-elements';
import { inject, observer } from 'mobx-react';

type Props = {
    avatar: any, // require source image
    storyImg: any, // require source image
    footer: string, // name such as Tran Thu or Add to Story
    isHaveCurve: boolean, // show avatar with blue curve or not,
    storyStore: any
}

@inject('storyStore')
@observer
class CardStory extends React.Component<Props> {
    render() {
        const { containerStyle, imgStyle, avatarStyle, textStyle } = styles;
        const { avatar, storyImg, footer, isHaveCurve, time, storyStore } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    storyStore.openCard({
                        avatar: avatar,
                        contentImg: storyImg,
                        time: time,
                        title: footer
                    });
                }}
            >
                <View style={containerStyle}>
                    <Image
                        source={storyImg}
                        style={imgStyle}
                    />
                    <View style={avatarStyle}>
                        <Avatar
                            size="small"
                            rounded
                            source={avatar}
                            containerStyle={isHaveCurve ? { borderColor: '#2d7fc8', borderWidth: 4, borderRadius: 90 } : {}}
                        />
                    </View>
                    <View style={textStyle}>
                        <Text style={{ color: '#F7F7F7', fontSize: 10, fontWeight: 'bold' }}>{footer}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F7F7F7',
        height: 140,
        width: 118,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 1,
        overflow: 'hidden',
        marginRight: 4

    },
    imgStyle: {
        flex: 1,
        height: null,
        width: null
    },
    avatarStyle: {
        position: 'absolute',
        top: 4,
        left: 4
    },
    textStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'flex-start',
        paddingStart: 4,
        justifyContent: 'center',
        alignSelf: 'stretch',
    }
};

export { CardStory };
