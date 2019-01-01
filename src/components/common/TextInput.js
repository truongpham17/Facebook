// @flow
import React from 'react';
import { View, TextInput as ReTextInput } from 'react-native';

type Props = {
    placeholder: string,
    icons: Array<any>
}
const TextInput = (props: Props) => {
    const { containerStyle, textInputStyle, containerIconStyle } = styles;
    const { placeholder, icons } = props;
    const iconsNode = [];
    if (icons) {
        icons.forEach(element => {
            iconsNode.push(element);
        });
    }
    
    return (
        <View style={containerStyle}>
            <ReTextInput 
                style={textInputStyle} 
                placeholder={placeholder}
                placeholderTextColor='#646464'
            />
            <View style={containerIconStyle}>
                {iconsNode}
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#7c8491',
        borderWidth: 1,
        borderRadius: 16,
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        padding: 4,
    },
    textInputStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginStart: 12,
        padding: 0,
        color: '#646464'
    },
    containerIconStyle: {
        flexDirection: 'row',
        marginEnd: 4
    }
};

export { TextInput };
