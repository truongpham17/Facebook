import React from 'react';
import { View, Text, Image } from 'react-native';

type Props = {
    reaction: Array<any>,
    nameReaction: string,
    commentReaction: string,
}

const Reaction = (props: Props) => {
    const { containerStyle, containerReactionStyle, imageStyle, textStyle } = styles;
    const { nameReaction, reaction, commentReaction } = props;
    const images = [];
    reaction.forEach(element => {
        images.push(<Image source={element} style={imageStyle} />);
    });
    return (
        <View style={containerStyle}>
            <View style={containerReactionStyle}>
                {images}
                <Text style={textStyle}>{nameReaction}</Text>
            </View>
            <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text>{commentReaction}</Text>
            </View>
        </View>
        
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    containerReactionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 6
    },
    imageStyle: {
        width: 14,
        height: 14,
    },
    textStyle: {
        marginStart: 4
    }
};

export { Reaction };
