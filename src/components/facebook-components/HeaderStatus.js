// @flow
import { Avatar } from 'react-native-elements';
import { TextInput } from '../common';
import React from 'react';
import { View, Image } from 'react-native';

const HeaderStatus = () => {
    const { containerStyle, textInputStyle, containerPhotoStyle } = styles;
    return (
        <View style={containerStyle}>
            <Avatar
                size="small"
                rounded
                source={require('../img/avatar.png')}
            />
            <View style={textInputStyle}>
                <TextInput placeholder="What's on your mind?" />
            </View>
            <Image 
                source={require('../img/photo.png')}
                style={containerPhotoStyle}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 48,
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: '#ffffff'
    },
    textInputStyle: {
        flex: 1,
        marginStart: 8,
        marginEnd: 8,
        padding: 0
    },
    containerPhotoStyle: {
        width: 30,
        height: 30
    }
};

export { HeaderStatus };
