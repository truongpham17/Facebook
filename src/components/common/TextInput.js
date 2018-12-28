// @flow
import React from 'react';
import { View, TextInput as ReTextInput } from 'react-native';


const TextInput = (props: { placeholder: string }) => {
    const { containerStyle, textInputStyle } = styles;
    return (
        <View style={containerStyle}>
            <ReTextInput 
                style={textInputStyle} 
                placeholder={props.placeholder}
                placeholderTextColor='#646464'
                color='#646464'
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#7c8491',
        borderWidth: 1,
        borderRadius: 16,
        height: 40,
        alignSelf: 'stretch',
        maxHeight: 32,
        backgroundColor: '#F7F7F7',
        padding: 4,
        marginStart: 8,
        marginEnd: 8

    },
    textInputStyle: {
        flex: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginStart: 12,
    }
};

export { TextInput };
