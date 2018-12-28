import React from 'react';
import { View, ScrollView } from 'react-native';
import { CardStory } from '../common';

const StoryBoard = () => {
    return (
            
                <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
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

export { StoryBoard };
