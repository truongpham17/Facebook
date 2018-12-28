import { View, TextInput, Image } from 'react-native';
import React from 'react';

const Search = (props: { placeHolder: string }) => {
    const { containerStyle, imageStyle, textInputStyle } = styles;
    return ( 
        <View style={containerStyle}>
            <View style={imageStyle}>
                <Image source={require('../img/search.png')} style={{ height: 16, width: 16 }} />
            </View>
            <TextInput 
                placeholder={props.placeHolder}
                placeholderTextColor='#F7F7F7'
                color='white'
                style={textInputStyle} 
            />
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1,
        borderRadius: 16,
        height: 40,
        alignSelf: 'stretch',
        maxHeight: 32,
        backgroundColor: '#3b5990',
        padding: 4,
        marginStart: 8,
        marginEnd: 8

    },
    imageStyle: {
        flex: 1,
    },
    textInputStyle: {
        flex: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginStart: 12,
    }
};

export { Search };
