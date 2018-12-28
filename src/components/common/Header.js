// @flow
import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Search } from './index';

const Header = (props: { placeHolder: string }) => {
    const { containerStyle, imageCameraStyle, searchStyle } = styles;
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={imageCameraStyle}>
                <Image source={require('../img/photo-camera.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <View style={searchStyle} >
                <Search placeHolder={props.placeHolder} />
            </View>
            <TouchableOpacity style={imageCameraStyle}>
                <Image source={require('../img/messenger.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
        </View>
    );
};
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#3b5998',
        maxHeight: 40,
    },
    imageCameraStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchStyle: {
        flex: 8,
    }

}

export { Header };
