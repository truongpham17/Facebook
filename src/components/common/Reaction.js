import React from 'react';
import { View, Text, Image } from 'react-native';

type Props = {
    reaction: Array<any>,
    description: string,
    comment: string,
}

const Reaction = (props: Props) => {
    const { containerStyle, containerReactionStyle, imageStyle, textStyle } = styles;
    const { description, reaction, comment } = props;
    const images = [];
    reaction.forEach(element => {
        images.push(<Image source={element} style={imageStyle} />);
    });
    return (
        <View style={containerStyle}>
            <View style={containerReactionStyle}>
                {images}
                <Text style={textStyle}>{description}</Text>
            </View>
            <View>
                <Text>{comment}</Text>
            </View>
        </View>
        
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerReactionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
