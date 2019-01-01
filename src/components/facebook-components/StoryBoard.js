import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { CardStory } from '../common';

const StoryBoard = () => {
    const { containerStyle, textContainerStyle, textStyle1, textStyle2 } = styles;
    return (
                <View style={containerStyle}>
                    <View style={textContainerStyle}>
                        <Text style={textStyle1}>Stories</Text>
                        <Text style={textStyle2}>See archive ></Text>
                    </View>
                    <ScrollView
                        directionalLockEnabled={false}
                        horizontal
                    >   
                        <CardStory />
                        <CardStory />
                        <CardStory />
                        <CardStory />
                        <CardStory />
                        <CardStory />
                     </ScrollView>
                </View>
           
    );
};

const styles = {
    containerStyle: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        marginTop: 12,
        marginBottom: 12,
        padding: 4,
        paddingBottom: 12,
        backgroundColor: '#ffffff'
    },
    textContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6
    },
    textStyle1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    textStyle2: {
        fontSize: 16,
        fontWeight: '800',
    }
};

export { StoryBoard };
