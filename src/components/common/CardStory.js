import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

const CardStory = () => {
    const { containerStyle, imgStyle, avatarStyle, textStyle } = styles;
    return (
        <View style={containerStyle}>
            <Image
                source={require('../img/avatar.png')}
                style={imgStyle}
            />
            <View style={avatarStyle}>
                <Avatar
                    size="small"
                    rounded
                    source={require('../img/avatar.png')}
                    containerStyle={{ borderColor: '#2d7fc8', borderWidth: 4, borderRadius: 90 }}
                />
            </View>
            <View style={textStyle}>
                <Text style={{ color: '#F7F7F7', fontSize: 10, fontWeight: 'bold' }}>Add to story</Text>
            </View>
        </View>
    );
};

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
